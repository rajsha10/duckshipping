# DuckShips

DuckShips is a Web3-powered shipping platform designed to streamline and enhance the shipping experience. Leveraging blockchain technology, DuckShips provides a secure, transparent, and user-friendly solution for managing shipments.

## Features

- **Start Shipment:** Initiate shipments easily with our intuitive interface. Input your shipment details, and DuckShips will handle the rest.
- **Get Shipment:** Track your shipments in real-time using our blockchain-powered tracking system. Stay updated on your packages' status at every stage.
- **Complete Shipment:** Mark shipments as complete with just a few clicks. Effortlessly manage and review your shipment history.
- **Total Number of Shipments:** View your shipping activity with clear statistics on the total number of shipments.

## Web3 Integration

- **Blockchain Data Storing:** DuckShips uses blockchain technology to securely store shipment data on the Arbitrum network, ensuring transparency and protection against data breaches.
- **MetaMask Payments:** Make payments seamlessly using MetaMask, adding convenience and security to your transactions.

## Technologies Used

- **Frontend:** Next.js
- **Blockchain:** Ethereum (using smart contracts developed with Hardhat and deployed to Arbitrum)
- **Payment Integration:** MetaMask

## Getting Started

1. **Visit DuckShips.com:** Access the DuckShips platform through our website.
2. **Create an Account:** Sign up and verify your account.
3. **Start Shipping:** Use the platform to start, track, and complete your shipments.

## Installation

To run DuckShips locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/duckships.git
    ```
2. Navigate to the project directory:
    ```bash
    cd duckships
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm run dev
    ```

## Smart Contracts

Smart contracts for DuckShips are developed using Hardhat and deployed on the Arbitrum network. To deploy or interact with the smart contracts locally, follow these steps:

1. Navigate to the `contracts` directory:
    ```bash
    cd contracts
    ```
2. Install Hardhat dependencies:
    ```bash
    npm install
    ```
3. Deploy contracts to Arbitrum:
    ```bash
    npx hardhat run scripts/deploy.js --network arbitrum
    ```

## Contributing

We welcome contributions to DuckShips! To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push to your fork.
4. Open a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact us at support@duckships.com.

---

Thank you for choosing DuckShips. We hope our platform makes your shipping experience simpler and more secure!
