const hre = require("hardhat");

async function main() {
  const HelloOPN = await hre.ethers.deployContract("HelloOPN");

  await HelloOPN.waitForDeployment();

  console.log("Contract deployed to:");
  console.log(await HelloOPN.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
