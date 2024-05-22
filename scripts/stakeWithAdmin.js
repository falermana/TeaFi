const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const TeaStakingContract = require('./build/contracts/TeaStakingWithAdmin.json');
const contractAddress = '<CONTRACT_ADDRESS>';
const teaStakingInstance = new web3.eth.Contract(TeaStakingContract.abi, contractAddress);

const main = async () => {
  const accounts = await web3.eth.getAccounts();
  const amountToStake = web3.utils.toWei('100', 'ether');
  const period = 30;
  const rewardAddress = '<REWARD_ADDRESS>';

  await teaStakingInstance.methods.stake(amountToStake, period, rewardAddress).send({ from: accounts[0] });

  console.log('Staking successful!');
};

main();
