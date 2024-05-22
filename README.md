TeaFi is the first defi project on Tea 

# TeaFi-ooooo

TeaFi-ooooo 是一个基于 Node.js 和智能合约的项目，用于质押 Tea 代币并获取收益。

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
