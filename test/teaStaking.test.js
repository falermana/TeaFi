const TeaStaking = artifacts.require("TeaStaking");

contract("TeaStaking", (accounts) => {
  let teaStakingInstance;

  before(async () => {
    teaStakingInstance = await TeaStaking.deployed();
  });

  it("should stake Tea tokens", async () => {
    // 编写测试逻辑
  });

  it("should withdraw Tea tokens", async () => {
    // 编写测试逻辑
  });

  it("should get rewards", async () => {
    // 编写测试逻辑
  });

  it("should set reward type", async () => {
    const user = accounts[0]; // 假设使用第一个账户进行测试
    const rewardType = "BTC"; // 假设用户选择的收益类型是 BTC

    // 调用设置收益类型的智能合约函数
    await teaStakingInstance.setRewardType(user, rewardType, { from: user });

    // 获取设置后的收益类型
    const userRewardType = await teaStakingInstance.rewardTypes(user);

    // 断言用户的收益类型与设置的收益类型相同
    assert.equal(userRewardType, rewardType, "Reward type not set correctly");
  });
});
