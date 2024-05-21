const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const BasicNFT = await hre.ethers.getContractFactory("DEVNFT");
  const basicNFT = await BasicNFT.deploy("MyNFT", "MNFT", {gasLimit: 7000000,gasPrice: 7000000});
  await basicNFT.deployed();
  console.log("BasicNFT deployed to:", basicNFT.address);

  const NFTAuction = await hre.ethers.getContractFactory("NFTAuction", {gasLimit: 7000000,gasPrice: 7000000});
  const nftAuction = await NFTAuction.deploy(basicNFT.address, deployer.address);
  await nftAuction.deployed();
  console.log("NFTAuction deployed to:", nftAuction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
