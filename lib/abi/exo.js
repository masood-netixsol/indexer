"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.functions = exports.events = exports.abi = void 0;
const ethers = __importStar(require("ethers"));
const abi_support_1 = require("./abi.support");
const exo_abi_1 = require("./exo.abi");
exports.abi = new ethers.utils.Interface(exo_abi_1.ABI_JSON);
exports.events = {
    Approval: new abi_support_1.LogEvent(exports.abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'),
    ApprovalForAll: new abi_support_1.LogEvent(exports.abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'),
    ContractURI: new abi_support_1.LogEvent(exports.abi, '0xff4ccd353885f015d383bdfcccc32f90e1573a6ec9da3c355dc74a39e1021059'),
    Lock: new abi_support_1.LogEvent(exports.abi, '0x57424d5909ad92dd80fbaa1967a047a5975a0e9bb94726d561734e667cdf4227'),
    RoleAdminChanged: new abi_support_1.LogEvent(exports.abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'),
    RoleGranted: new abi_support_1.LogEvent(exports.abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'),
    RoleRevoked: new abi_support_1.LogEvent(exports.abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'),
    SecondarySaleFee: new abi_support_1.LogEvent(exports.abi, '0xff1fd4151acecc8a2e88c4741c30f16103d745f2a593af078b174b4bce0cf08d'),
    Transfer: new abi_support_1.LogEvent(exports.abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'),
    URI: new abi_support_1.LogEvent(exports.abi, '0x901e1c01b493ffa41590ea147378e25dde9601a9390b52eb75d4e0e2118a44a5'),
    URIAll: new abi_support_1.LogEvent(exports.abi, '0x9bf13f1005bf8940f6b531a89ba63b7fbd1b63269d49cc5612e9268b07d2527d'),
};
exports.functions = {
    COMPOSITE_CREATOR_ROLE: new abi_support_1.Func(exports.abi, '0xda143236'),
    DEFAULT_ADMIN_ROLE: new abi_support_1.Func(exports.abi, '0xa217fddf'),
    GOVERNANCE_ROLE: new abi_support_1.Func(exports.abi, '0xf36c8f5c'),
    MINTER_ROLE: new abi_support_1.Func(exports.abi, '0xd5391393'),
    OPERATOR_ROLE: new abi_support_1.Func(exports.abi, '0xf5b541a6'),
    VERSION: new abi_support_1.Func(exports.abi, '0xffa1ad74'),
    approve: new abi_support_1.Func(exports.abi, '0x095ea7b3'),
    balanceOf: new abi_support_1.Func(exports.abi, '0x70a08231'),
    batch: new abi_support_1.Func(exports.abi, '0xd2423b51'),
    burn: new abi_support_1.Func(exports.abi, '0x42966c68'),
    compositeURI: new abi_support_1.Func(exports.abi, '0xbd7a8f2b'),
    contractURI: new abi_support_1.Func(exports.abi, '0xe8a3d485'),
    decimals: new abi_support_1.Func(exports.abi, '0x313ce567'),
    defaultTokenURI: new abi_support_1.Func(exports.abi, '0x963bfe12'),
    erc2665Handler: new abi_support_1.Func(exports.abi, '0xb6a0274b'),
    exists: new abi_support_1.Func(exports.abi, '0x4f558e79'),
    getApproved: new abi_support_1.Func(exports.abi, '0x081812fc'),
    getRoleAdmin: new abi_support_1.Func(exports.abi, '0x248a9ca3'),
    getRoleMember: new abi_support_1.Func(exports.abi, '0x9010d07c'),
    getRoleMemberCount: new abi_support_1.Func(exports.abi, '0xca15c873'),
    'getTransferFee(uint256)': new abi_support_1.Func(exports.abi, '0x56c1e949'),
    'getTransferFee(uint256,string)': new abi_support_1.Func(exports.abi, '0x86f24f20'),
    globalCompositeTokenURIBase: new abi_support_1.Func(exports.abi, '0x5c3e0c44'),
    grantRole: new abi_support_1.Func(exports.abi, '0x2f2ff15d'),
    hasRole: new abi_support_1.Func(exports.abi, '0x91d14854'),
    initialize: new abi_support_1.Func(exports.abi, '0x4cee5981'),
    initialized: new abi_support_1.Func(exports.abi, '0x158ef93e'),
    isApprovedForAll: new abi_support_1.Func(exports.abi, '0xe985e9c5'),
    isProxy: new abi_support_1.Func(exports.abi, '0x76d1f139'),
    lock: new abi_support_1.Func(exports.abi, '0xf83d08ba'),
    lockedForever: new abi_support_1.Func(exports.abi, '0x640bd61a'),
    mint: new abi_support_1.Func(exports.abi, '0xd0def521'),
    mintDefault: new abi_support_1.Func(exports.abi, '0x1ad33033'),
    name: new abi_support_1.Func(exports.abi, '0x06fdde03'),
    originalURI: new abi_support_1.Func(exports.abi, '0xdf9ba231'),
    ownerOf: new abi_support_1.Func(exports.abi, '0x6352211e'),
    proxyRegistry: new abi_support_1.Func(exports.abi, '0xb50cbd9f'),
    renounceRole: new abi_support_1.Func(exports.abi, '0x36568abe'),
    revokeRole: new abi_support_1.Func(exports.abi, '0xd547741f'),
    royaltyInfo: new abi_support_1.Func(exports.abi, '0x2a55205a'),
    'safeTransferFrom(address,address,uint256)': new abi_support_1.Func(exports.abi, '0x42842e0e'),
    'safeTransferFrom(address,address,uint256,bytes)': new abi_support_1.Func(exports.abi, '0xb88d4fde'),
    secondarySaleFee: new abi_support_1.Func(exports.abi, '0x4322d9b7'),
    setApprovalForAll: new abi_support_1.Func(exports.abi, '0xa22cb465'),
    setContractURI: new abi_support_1.Func(exports.abi, '0x938e3d7b'),
    setCustomCompositeTokenURIBase: new abi_support_1.Func(exports.abi, '0x11fb4c60'),
    setCustomTokenURI: new abi_support_1.Func(exports.abi, '0x851fc4b6'),
    setDefaultTokenURI: new abi_support_1.Func(exports.abi, '0xa125c824'),
    setERC2665Handler: new abi_support_1.Func(exports.abi, '0x9b5b8d86'),
    setFee: new abi_support_1.Func(exports.abi, '0xe55156b5'),
    setGlobalCompositeTokenURIBase: new abi_support_1.Func(exports.abi, '0xb36d0f87'),
    setProxyRegistryAddress: new abi_support_1.Func(exports.abi, '0xd26ea6c0'),
    setTransferListener: new abi_support_1.Func(exports.abi, '0x2376bf3f'),
    setUseCompositeTokenURI: new abi_support_1.Func(exports.abi, '0x28cf18db'),
    supportsInterface: new abi_support_1.Func(exports.abi, '0x01ffc9a7'),
    symbol: new abi_support_1.Func(exports.abi, '0x95d89b41'),
    tokenURI: new abi_support_1.Func(exports.abi, '0xc87b56dd'),
    totalSupply: new abi_support_1.Func(exports.abi, '0x18160ddd'),
    transferFrom: new abi_support_1.Func(exports.abi, '0x23b872dd'),
    transferListener: new abi_support_1.Func(exports.abi, '0x538ee007'),
    uri: new abi_support_1.Func(exports.abi, '0x0e89341c'),
};
class Contract extends abi_support_1.ContractBase {
    COMPOSITE_CREATOR_ROLE() {
        return this.eth_call(exports.functions.COMPOSITE_CREATOR_ROLE, []);
    }
    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(exports.functions.DEFAULT_ADMIN_ROLE, []);
    }
    GOVERNANCE_ROLE() {
        return this.eth_call(exports.functions.GOVERNANCE_ROLE, []);
    }
    MINTER_ROLE() {
        return this.eth_call(exports.functions.MINTER_ROLE, []);
    }
    OPERATOR_ROLE() {
        return this.eth_call(exports.functions.OPERATOR_ROLE, []);
    }
    VERSION() {
        return this.eth_call(exports.functions.VERSION, []);
    }
    balanceOf(owner) {
        return this.eth_call(exports.functions.balanceOf, [owner]);
    }
    compositeURI(tokenId) {
        return this.eth_call(exports.functions.compositeURI, [tokenId]);
    }
    contractURI() {
        return this.eth_call(exports.functions.contractURI, []);
    }
    decimals() {
        return this.eth_call(exports.functions.decimals, []);
    }
    defaultTokenURI() {
        return this.eth_call(exports.functions.defaultTokenURI, []);
    }
    erc2665Handler() {
        return this.eth_call(exports.functions.erc2665Handler, []);
    }
    exists(tokenId) {
        return this.eth_call(exports.functions.exists, [tokenId]);
    }
    getApproved(tokenId) {
        return this.eth_call(exports.functions.getApproved, [tokenId]);
    }
    getRoleAdmin(role) {
        return this.eth_call(exports.functions.getRoleAdmin, [role]);
    }
    getRoleMember(role, index) {
        return this.eth_call(exports.functions.getRoleMember, [role, index]);
    }
    getRoleMemberCount(role) {
        return this.eth_call(exports.functions.getRoleMemberCount, [role]);
    }
    'getTransferFee(uint256)'(_tokenId) {
        return this.eth_call(exports.functions['getTransferFee(uint256)'], [_tokenId]);
    }
    'getTransferFee(uint256,string)'(_tokenId, _currencySymbol) {
        return this.eth_call(exports.functions['getTransferFee(uint256,string)'], [_tokenId, _currencySymbol]);
    }
    globalCompositeTokenURIBase() {
        return this.eth_call(exports.functions.globalCompositeTokenURIBase, []);
    }
    hasRole(role, account) {
        return this.eth_call(exports.functions.hasRole, [role, account]);
    }
    initialized() {
        return this.eth_call(exports.functions.initialized, []);
    }
    isApprovedForAll(_owner, _operator) {
        return this.eth_call(exports.functions.isApprovedForAll, [_owner, _operator]);
    }
    isProxy(_address, _operator) {
        return this.eth_call(exports.functions.isProxy, [_address, _operator]);
    }
    lockedForever() {
        return this.eth_call(exports.functions.lockedForever, []);
    }
    name() {
        return this.eth_call(exports.functions.name, []);
    }
    originalURI(tokenId) {
        return this.eth_call(exports.functions.originalURI, [tokenId]);
    }
    ownerOf(tokenId) {
        return this.eth_call(exports.functions.ownerOf, [tokenId]);
    }
    proxyRegistry() {
        return this.eth_call(exports.functions.proxyRegistry, []);
    }
    royaltyInfo(arg0, _salePrice) {
        return this.eth_call(exports.functions.royaltyInfo, [arg0, _salePrice]);
    }
    secondarySaleFee(arg0) {
        return this.eth_call(exports.functions.secondarySaleFee, [arg0]);
    }
    supportsInterface(interfaceId) {
        return this.eth_call(exports.functions.supportsInterface, [interfaceId]);
    }
    symbol() {
        return this.eth_call(exports.functions.symbol, []);
    }
    tokenURI(tokenId) {
        return this.eth_call(exports.functions.tokenURI, [tokenId]);
    }
    totalSupply() {
        return this.eth_call(exports.functions.totalSupply, []);
    }
    transferListener() {
        return this.eth_call(exports.functions.transferListener, []);
    }
    uri(tokenId) {
        return this.eth_call(exports.functions.uri, [tokenId]);
    }
}
exports.Contract = Contract;
//# sourceMappingURL=exo.js.map