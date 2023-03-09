"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateContractEntity = exports.EXOSAMA_NFT_CONTRACT = exports.MULTICALL_ADDRESS = void 0;
const model_1 = require("./model");
// see https://github.com/makerdao/multicall
exports.MULTICALL_ADDRESS = "0x5ba1e12693dc8f9c48aad8770482f4739beed696";
exports.EXOSAMA_NFT_CONTRACT = "0xac5c7493036de60e63eb81c5e9a440b42f47ebf5";
let contractEntity;
async function getOrCreateContractEntity(store) {
    if (contractEntity == null) {
        contractEntity = await store.get(model_1.Contract, exports.EXOSAMA_NFT_CONTRACT);
        if (contractEntity == null) {
            contractEntity = new model_1.Contract({
                id: exports.EXOSAMA_NFT_CONTRACT,
                name: "Exosama",
                symbol: "EXO",
                totalSupply: 10000n,
            });
            await store.insert(contractEntity);
        }
    }
    return contractEntity;
}
exports.getOrCreateContractEntity = getOrCreateContractEntity;
//# sourceMappingURL=contract.js.map