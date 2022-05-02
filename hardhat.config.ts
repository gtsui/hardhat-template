import 'dotenv/config';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-gas-reporter';
import 'solidity-docgen';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {
    rinkeby: {
      url: process.env.PROVIDER_RINKEBY,
      chainId: 4,
      accounts: process.env.KEYS!.split(",")
    },
    moonbase: {
      url: process.env.PROVIDER_MOONBASE,
      chainId: 1287,
      accounts: process.env.KEYS!.split(",")
    }
  },
  
  gasReporter: {
    enabled: true,
    fast: true,
    noColors: true
  },

  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_APIKEY,
      ropsten: process.env.ETHERSCAN_APIKEY,
      rinkeby: process.env.ETHERSCAN_APIKEY,
      goerli: process.env.ETHERSCAN_APIKEY,
      kovan: process.env.ETHERSCAN_APIKEY,
      moonbaseAlpha: process.env.MOONSCAN_APIKEY
    }
  },
  
  docgen: {
    pages: 'files'
  }
};
