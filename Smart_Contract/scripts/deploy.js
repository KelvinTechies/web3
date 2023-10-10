// const hre = require("hardhat");
const main = async () => {
  /*  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001"); */

  const Trasactions = await hre.ethers.getContractFactory("Trasactions");
  const trasactions = await Trasactions.deploy();

  await trasactions.deployed();
  console.log("trasactions deployed toL:", trasactions.address);
  /*  const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  }); */

  // await lock.waitForDeployment();s

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();
