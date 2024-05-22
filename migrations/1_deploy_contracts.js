const TeaStaking = artifacts.require("TeaStaking");

module.exports = function(deployer) {
  const teaTokenAddress = "<TEA_TOKEN_ADDRESS>"; 
  const rewardAddress = "<REWARD_ADDRESS>"; 
  deployer.deploy(TeaStaking, teaTokenAddress, rewardAddress);
};
