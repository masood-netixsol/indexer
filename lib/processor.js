"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const archive_registry_1 = require("@subsquid/archive-registry");
const evm_processor_1 = require("@subsquid/evm-processor");
const typeorm_store_1 = require("@subsquid/typeorm-store");
const typeorm_1 = require("typeorm");
const exo_1 = require("./abi/exo");
const contract_1 = require("./contract");
const model_1 = require("./model");
const database = new typeorm_store_1.TypeormDatabase();
const processor = new evm_processor_1.EvmBatchProcessor()
    .setBlockRange({ from: 0 })
    .setDataSource({
    chain: process.env.RPC_ENDPOINT || "https://rpc.ankr.com/eth",
    archive: (0, archive_registry_1.lookupArchive)("eth-mainnet"),
})
    .addLog([], {
    filter: [[exo_1.events.Transfer.topic]],
    data: {
        evmLog: {
            topics: true,
            data: true,
        },
        transaction: {
            hash: true,
            from: true,
        },
    },
});
processor.run(database, async (ctx) => {
    const transfersData = [];
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.kind === "evmLog" &&
                item &&
                item.evmLog &&
                item.evmLog.topics &&
                item.evmLog.topics.length &&
                item.evmLog.topics.length === 4) {
                const transfer = handleTransfer({
                    ...ctx,
                    block: block.header,
                    ...item,
                });
                transfersData.push(transfer);
            }
        }
    }
    ctx.log.info(`Saving ${transfersData.length} transfers`);
    await saveTransfers({
        ...ctx,
        block: ctx.blocks[ctx.blocks.length - 1].header,
    }, transfersData);
});
function handleTransfer(ctx) {
    const { evmLog, transaction, block } = ctx;
    const addr = evmLog.address.toLowerCase();
    const { from, to, tokenId } = exo_1.events.Transfer.decode(evmLog);
    const transfer = {
        id: `${transaction.hash}-${addr}-${tokenId.toBigInt()}-${evmLog.index}`,
        tokenId: tokenId.toBigInt(),
        from,
        to,
        timestamp: BigInt(block.timestamp),
        block: block.height,
        transactionHash: transaction.hash,
    };
    return transfer;
}
async function saveTransfers(ctx, transfersData) {
    const tokensIds = new Set();
    const ownersIds = new Set();
    for (const transferData of transfersData) {
        tokensIds.add(transferData.tokenId.toString());
        ownersIds.add(transferData.from);
        ownersIds.add(transferData.to);
    }
    const transfers = new Set();
    const tokens = new Map((await ctx.store.findBy(model_1.Token, { id: (0, typeorm_1.In)([...tokensIds]) })).map((token) => [
        token.id,
        token,
    ]));
    const owners = new Map((await ctx.store.findBy(model_1.Owner, { id: (0, typeorm_1.In)([...ownersIds]) })).map((owner) => [
        owner.id,
        owner,
    ]));
    for (const transferData of transfersData) {
        let from = owners.get(transferData.from);
        if (from == null) {
            from = new model_1.Owner({ id: transferData.from, balance: 0n });
            owners.set(from.id, from);
        }
        let to = owners.get(transferData.to);
        if (to == null) {
            to = new model_1.Owner({ id: transferData.to, balance: 0n });
            owners.set(to.id, to);
        }
        const tokenIdString = transferData.tokenId.toString();
        let token = tokens.get(tokenIdString);
        if (token == null) {
            token = new model_1.Token({
                id: tokenIdString,
                //uri: to be set later
                contract: await (0, contract_1.getOrCreateContractEntity)(ctx.store),
            });
            tokens.set(token.id, token);
        }
        token.owner = to;
        const { id, block, transactionHash, timestamp } = transferData;
        const transfer = new model_1.Transfer({
            id,
            block,
            timestamp,
            transactionHash,
            from,
            to,
            token,
        });
        transfers.add(transfer);
    }
    // if (transfersData.length) {
    //   const maxHeight = maxBy(transfersData, (t) => t.block)!.block;
    //   // query the multicall contract at the max height of the chunk
    //   const multicall = new Multicall(
    //     ctx,
    //     { height: maxHeight },
    //     MULTICALL_ADDRESS
    //   );
    //   ctx.log.info(`Calling mutlicall for ${transfersData.length} tokens...`);
    //   // call in pages of size 100
    //   const results = await multicall.tryAggregate(
    //     functions.tokenURI,
    //     transfersData.map(
    //       (t) =>
    //         [EXOSAMA_NFT_CONTRACT, [BigNumber.from(t.tokenId)]] as [string, any[]]
    //     ),
    //     100
    //   );
    //   results.forEach((res, i) => {
    //     let t = tokens.get(transfersData[i].tokenId.toString());
    //     if (t) {
    //       let uri = "";
    //       if (res.success) {
    //         uri = <string>res.value;
    //       } else if (res.returnData) {
    //         uri =
    //           <string>functions.tokenURI.tryDecodeResult(res.returnData) || "";
    //       }
    //     }
    //   });
    //   ctx.log.info(`Done`);
    // }
    await ctx.store.save([...owners.values()]);
    await ctx.store.save([...tokens.values()]);
    await ctx.store.save([...transfers]);
}
//# sourceMappingURL=processor.js.map