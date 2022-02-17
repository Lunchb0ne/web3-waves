import { ethers } from "hardhat";

const main = async () => {
  // Same Contract name that we used in the .sol file of the contract
  const [owner, randomPerson] = await ethers.getSigners();
  const waveContractFactory = await ethers.getContractFactory("WaveContract");
  const waveContract = await waveContractFactory.deploy();
  // wait to deploy the contract
  await waveContract.deployed();
  console.log(`Contract Deployed to Addr: ${waveContract.address}`);
  console.log(`Contract Deployed by Addr: ${owner.address}`);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  const waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
};

runMain();
