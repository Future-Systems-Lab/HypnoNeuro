require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/5084b09c53924f9d9c6e05e172ba90af",
      accounts: ["e789f757edac6c8386751362dfbd9e52ec0237f61c69042ed27f2820a467b4ab"]
    }
  }
};

