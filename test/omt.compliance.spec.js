const { expect } = require("chai");
describe("OrthomolecularToken compliance logic", function () {
  it("requires module completion before compliance reward", async function () {
    const [owner, user] = await ethers.getSigners();
    const F = await ethers.getContractFactory("OrthomolecularToken");
    const c = await F.deploy();
    await expect(c.rewardCompliance(user.address)).to.be.revertedWith("Module not completed");
  });
  it("only owner can reward compliance", async function () {
    const [owner, user, other] = await ethers.getSigners();
    const F = await ethers.getContractFactory("OrthomolecularToken");
    const c = await F.deploy();
    await (await c.connect(user).confirmMedications()).wait();
    await (await c.connect(user).completeModule()).wait();
    await expect(c.connect(other).rewardCompliance(user.address)).to.be.reverted;
    await (await c.rewardCompliance(user.address)).wait();
    expect(await c.balanceOf(user.address)).to.equal(150n * 10n**18n);
  });
});
