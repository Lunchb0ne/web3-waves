import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  // Same Contract name that we used in the .sol file of the contract
  const waveContractFactory = await ethers.getContractFactory("WaveContract");
  const waveContract = await waveContractFactory.deploy();

  console.log(`Contract Deployed by Addr: ${deployer.address}`);
  console.log(`Deployer Bal: ${accountBalance}`);
  // wait to deploy the contract
  await waveContract.deployed();
  console.log(`Contract Deployed to Addr: ${waveContract.address}`);
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
