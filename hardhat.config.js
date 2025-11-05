// Rights Reserved, Unlicensed
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.30", settings: { optimizer: { enabled: true, runs: 200 } } },
      { version: "0.8.28", settings: { optimizer: { enabled: true, runs: 200 } } },
      { version: "0.8.24", settings: { optimizer: { enabled: true, runs: 200 } } },
      { version: "0.8.20", settings: { optimizer: { enabled: true, runs: 200 } } },
      { version: "0.8.1",  settings: { optimizer: { enabled: true, runs: 200 } } },
      { version: "0.8.0",  settings: { optimizer: { enabled: true, runs: 200 } } }
    ]
  }
};
