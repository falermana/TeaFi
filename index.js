const express = require('express');
const app = express();
const port = 3000;

// 导入智能合约实例和 Web3 实例
const TeaStakingContract = require('./build/contracts/TeaStaking.json');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // 你的以太坊节点地址
const contractAddress = '<CONTRACT_ADDRESS>'; // 合约部署后的地址
const teaStakingInstance = new web3.eth.Contract(TeaStakingContract.abi, contractAddress);

// 设置路由处理用户的选择收益类型的请求
app.post('/choose-reward', async (req, res) => {
  const { address, rewardType } = req.body;

  // 调用智能合约的函数来设置用户选择的收益类型
  await teaStakingInstance.methods.setRewardType(address, rewardType).send({ from: address });

  res.send('Reward type set successfully!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
