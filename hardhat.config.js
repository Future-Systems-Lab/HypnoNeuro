require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/5084b09c53924f9d9c6e05e172ba90af",
      accounts: ["0xDA21814b590a0e1c9E198126773c614b940A401A"]
    }
  }
};

