require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rescue noble minor hockey civil army ghost'; 
let testAccounts = [
"0xd149f22f20c9a7875f9b07d5534fd1b9aa3b73a01ed4f1793bd8831e8e2cebc1",
"0x3db0fbcbfb4b7375fd8bf6b660e10709948c9887badb5d3fa990ceb438c50e95",
"0x96825907c9c271e2d41220d01a64408f24a9ee92c07fde09bc9c4e56fb9e2905",
"0x9131933bfbc229c46e71a34e1092916bd4c7ba1ff1f0268d68d04d1fe86d6f50",
"0x1e80a42a7ad6233d10ae2dddb2fdd3b3f216bbce5358a8661adc3ee6dedb686b",
"0x6acf52a31be25443c72617007128b995d9f253ab92faef32778e750c5c7f69cb",
"0x8e29abc1971b9985ee19340de8b3323006a7d03cc6c661f4f662eb2df0bc6f51",
"0xef21bbf2fd1333acdd1bfb4319a1970d9213f6db360a8c8341cffc48ec5c36a6",
"0x5f48a1430eac82745ba065576f3fcce64877962e9106f24f4cbb4717c523bbb3",
"0xdf5aa0855be875f26487a51000da5627855fbcecf7572c4754df99be8c891300"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

