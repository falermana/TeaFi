const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); 

const TeaStakingContract = require('./build/contracts/TeaStaking.json');
const contractAddress = '<CONTRACT_ADDRESS>'; 
const teaStakingInstance = new web3.eth.Contract(TeaStakingContract.abi, contractAddress);

const main = async () => {
  const accounts = await web3.eth.getAccounts();
  const amountToStake = web3.utils.toWei('100', 'ether'); 
  const rewardAddress = '<REWARD_ADDRESS>'; 

  // 调用质押函数，并传入用户选择的收益地址
  await teaStakingInstance.methods.stake(amountToStake, rewardAddress).send({ from: accounts[0] });

  console.log('Staking successful!');
};

main();
