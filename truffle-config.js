require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
      ),
      gas: 5000000,
      gasPrice: 8000000000, // 5 gwei
      network_id: 3,
      skipDryRun: true,
    },
    rinkeby: {
      provider: new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
      ),
      gas: 5000000,
      gasPrice: 8000000000, // 5 gwei
      network_id: 4,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "^0.5.16",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
