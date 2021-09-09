require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan regret spice pulse harvest office army genius'; 
let testAccounts = [
"0xb6f9cfe65e0792f55e54ae46fda13dafc4b38513ed619c25be0f8eec7840587d",
"0xfaeb0dd36dc18f285a6b882166cd5f1caf290f9487b1a8546dc92fbc1d9da9b3",
"0xa9c0efe33d3c14509de1f27d85831f77df32326dad2ae13098a012b70806b1b1",
"0x25ca9194a7c4c2ab0c2d1d3ac60a87fb1a1f4c03c653b0b0e5a8bff0d0cb9690",
"0x603779cbbd103e542975feb80ad0140a6df74804c8a3ec765ecd87e688436a12",
"0x6567b00848a76b75863d25e475564c84a34fc1838d49880d533bea25d27e13e1",
"0x7435c1645683dc3023a3dc2bf39d625e1af1b1c845453963402717cfa55845f0",
"0x47735d894e32eb61cfa7948339e6299c49bd5519ec672d8a526335069ef157d9",
"0xcc26c2a5c8ea91ba6d6c83e2a6346a2039362718ed68317538d24793226e8757",
"0x0602f614f21801e2ad965a9a727ea578884582876e01f5839699d848c896ff59"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


