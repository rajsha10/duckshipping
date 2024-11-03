const hre = require("hardhat");

async function main() {
  try {
    console.log("Starting deployment script...");
    
    // Get the contract factory
    const Duck = await ethers.getContractFactory("Duck");
    console.log("Got contract factory...");

    // Deploy the contract
    console.log("Deploying Duck contract...");
    const duck = await Duck.deploy();
    
    // Wait for deployment using waitForDeployment()
    await duck.waitForDeployment();
    
    // Get the contract address using getAddress()
    const address = await duck.getAddress();
    
    console.log("Duck contract deployed successfully!");
    console.log("Contract Address:", address);
    
    // Optional: Verify on Etherscan
    if (network.name !== "hardhat" && network.name !== "localhost") {
      console.log("Waiting for block confirmations...");
      // Wait for few block confirmations
      await new Promise(resolve => setTimeout(resolve, 20000)); // 20 seconds delay
      
      console.log("Verifying contract...");
      await hre.run("verify:verify", {
        address: address,
        constructorArguments: [],
      });
    }
  } catch (error) {
    console.error("Error during deployment:", error);
    throw error;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });