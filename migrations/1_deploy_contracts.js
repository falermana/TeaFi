const TeaStaking = artifacts.require("TeaStaking");

module.exports = function(deployer) {
  deployer.deploy(TeaStaking, "<TEA_TOKEN_ADDRESS>");
};
