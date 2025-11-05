const hre = require("hardhat");
async function main(){
  const [deployer] = await hre.ethers.getSigners();
  const F = await hre.ethers.getContractFactory("OrthomolecularToken");
  const c = await F.deploy();
  const addr = c.target ?? c.address;
  console.log("Deployer:", deployer.address);
  console.log("OrthomolecularToken:", addr);
  await (await c.confirmMedications()).wait();
  await (await c.completeModule()).wait();
  let bal = await c.balanceOf(deployer.address);
  console.log("After module:", bal.toString());
  await (await c.rewardCompliance(deployer.address)).wait();
  bal = await c.balanceOf(deployer.address);
  console.log("After compliance:", bal.toString());
}
main().catch((e)=>{console.error(e);process.exit(1);});
