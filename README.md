teafi is the first defi project on Tea 

# teafi-ooooo

teafi-ooooo 是一个基于 Node.js 和智能合约的项目，用于质押 Tea 代币并获取收益。

## 功能特性

- 用户可以通过质押 Tea 代币来参与质押活动。
- 参与质押的用户将根据其质押的 Tea 代币数量获得相应的收益。
- 用户可以随时撤回原始质押的代币。

## 快速开始

1. 安装 Node.js 和 npm。
2. 克隆项目仓库：`git clone <repository-url>`
3. 进入项目目录：`cd teafi-ooooo`
4. 安装依赖：`npm install`
5. 部署智能合约：在 `migrations/1_deploy_contracts.js` 文件中填入 Tea 代币的地址，然后运行 `truffle migrate --network <network>`。
6. 启动服务器：`npm start`

## 文件结构

```
teafi-ooooo/
│
├── contracts/            # 存放智能合约文件
│   └── TeaStaking.sol   # 质押合约文件
│
├── migrations/           # 存放迁移脚本文件
│   └── 1_deploy_contracts.js  # 部署合约的迁移脚本
│
├── scripts/              # 存放脚本文件
│   └── stake.js          # 质押脚本文件
│
├── test/                 # 存放测试文件
│   └── teaStaking.test.js  # 质押合约的测试文件
│
├── .gitignore            # Git 忽略文件列表
├── index.js              # 项目入口文件
├── package.json          # 项目配置文件
└── README.md             # 项目说明文件
```

## 技术栈

- Node.js
- Express.js
- Solidity
- Web3.js

## 许可证

该项目采用 MIT 许可证进行许可。详细信息请参阅 [LICENSE](LICENSE) 文件。



--------------------------------------------------------------------------------------------

# teafi-ooooo

teafi-ooooo is a project based on Node.js and smart contracts, designed for staking Tea tokens and earning rewards.

## Features

- Users can participate in staking activities by staking Tea tokens.
- Participants will earn rewards based on the amount of Tea tokens they have staked.
- Users can withdraw their originally staked tokens at any time.

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
├── contracts/            # Directory for smart contract files
│   └── TeaStaking.sol   # Smart contract file for staking
│
├── migrations/           # Directory for migration scripts
│   └── 1_deploy_contracts.js  # Migration script for deploying contracts
│
├── scripts/              # Directory for script files
│   └── stake.js          # Script file for staking
│
├── test/                 # Directory for test files
│   └── teaStaking.test.js  # Test file for staking contract
│
├── .gitignore            # Git ignore file
├── index.js              # Entry file of the project
├── package.json          # Project configuration file
└── README.md             # Project documentation file
```

## Tech Stack

- Node.js
- Express.js
- Solidity
- Web3.js

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
