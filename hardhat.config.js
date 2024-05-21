require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-web3");
require('solidity-coverage')
require('dotenv').config()


const SEPOLIA_PRIVATE_KEY2 = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
 
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
          viaIR: true
        }
      }]
  },
  networks: {
    hardhat: {
      chainId: 5,
      allowUnlimitedContractSize: true,
      blockGasLimit: 2099511627775,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      }
    },
    opal: {
      url: "https://rpc-opal.unique.network/",
      chainId: 8882,
      accounts: [SEPOLIA_PRIVATE_KEY2],
      gasPrice: 7000000,
      gasLimit: 7000000
    }
  },
  etherscan: {
    apiKey: "MDAY6CCV7QC9BKHBC7PXQ7BYQMY4FDUSCH" // Replace with your Etherscan API key
  }
}
