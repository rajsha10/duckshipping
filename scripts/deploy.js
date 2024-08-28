const hre = require("hardhat");

async function main(){
    const Duck = await hre.ethers.getContractFactory("Duck");
    const duck = await Duck.deploy();

    await duck.deployed();

    console.log(`Duck deployed to ${duck.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})