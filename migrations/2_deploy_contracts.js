const TeaStakingWithAdmin = artifacts.require("TeaStakingWithAdmin");

module.exports = function(deployer) {
  const teaTokenAddress = "<TEA_TOKEN_ADDRESS>";
  deployer.deploy(TeaStakingWithAdmin, teaTokenAddress);
};
