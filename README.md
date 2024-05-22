
# teafi-ooooo

teafi-ooooo is a project based on Node.js and smart contracts, designed for staking Tea tokens and earning rewards.

## Features

- Users can participate in staking activities by staking Tea tokens.
- Participants will earn rewards based on the amount of Tea tokens they have staked.
- Users can withdraw their originally staked tokens at any time.
- Users can choose different staking periods.
- Admin can manage reward types and distribution.

## Quick Start

1. Install Node.js and npm.
2. Clone the project repository: `git clone <repository-url>`
3. Navigate to the project directory: `cd teafi-ooooo`
4. Install dependencies: `npm install`
5. Deploy the smart contracts: Fill in the Tea token address in `migrations/1_deploy_contracts.js` file, then run `truffle migrate --network <network>`.
6. Start the server: `npm start`

## File Structure

```
teafi-ooooo/
│
├── contracts/
│   └── TeaStaking.sol
│
├── migrations/
│   └── 1_deploy_contracts.js
│
├── scripts/
│   └── stake.js
│
├── test/
│   └── teaStaking.test.js
│
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Tech Stack

- Node.js
- Express.js
- Solidity
- Web3.js

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
