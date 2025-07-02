const hre = require("hardhat");

async function main() {
  const MindMasteryNFT = await hre.ethers.getContractFactory("MindMasteryNFT");
  const contract = await MindMasteryNFT.deploy();
  await contract.deployed();
  console.log("✅ MindMasteryNFT deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

