const hre = require("hardhat");
async function main(){
  const [deployer] = await hre.ethers.getSigners();
  const F = await hre.ethers.getContractFactory("OrthomolecularToken");
  const c = await F.deploy();
  const addr = c.target ?? c.address;
  console.log("Deployer:", deployer.address);
  console.log("OrthomolecularToken:", addr);
  let bal = await c.balanceOf(deployer.address);
  console.log("Balance before:", bal.toString());
  const tx1 = await c.connect(deployer).confirmMedications();
  await tx1.wait();
  const tx2 = await c.connect(deployer).completeModule();
  await tx2.wait();
  bal = await c.balanceOf(deployer.address);
  console.log("Balance after:", bal.toString());
}
main().catch((e)=>{console.error(e);process.exit(1);});
