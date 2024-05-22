const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // 你的以太坊节点地址

const TeaStakingContract = require('./build/contracts/TeaStaking.json');
const contractAddress = '<CONTRACT_ADDRESS>'; // 合约部署后的地址
const teaStakingInstance = new web3.eth.Contract(TeaStakingContract.abi, contractAddress);

const main = async () => {
  const accounts = await web3.eth.getAccounts();
  const amountToStake = web3.utils.toWei('100', 'ether'); // 要质押的代币数量

  // 调用质押函数
  await teaStakingInstance.methods.stake(amountToStake).send({ from: accounts[0] });

  console.log('Staking successful!');
};

main();
