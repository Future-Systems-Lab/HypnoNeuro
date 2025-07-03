require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/dbafc1c5e20d4d849e9b625fc28c4154",
      accounts: ["e789f757edac6c8386751362dfbd9e52ec0237f61c69042ed27f2820a467b4ab"]
    }
  }
};

