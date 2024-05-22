// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol"; 

contract TeaStaking {
    IERC20 public teaToken;
    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public lastUpdateTime;
    mapping(address => uint256) public rewards;
    mapping(address => address) public rewardAddresses; // 存储用户选择的收益类型和地址

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    constructor(address _teaToken) {
        teaToken = IERC20(_teaToken);
    }

    function stake(uint256 amount, address rewardAddress) external {
        updateReward(msg.sender);
        require(amount > 0, "Cannot stake 0");
        teaToken.transferFrom(msg.sender, address(this), amount);
        stakedBalance[msg.sender] += amount;
        rewardAddresses[msg.sender] = rewardAddress; // 设置用户选择的收益类型和地址
        lastUpdateTime[msg.sender] = block.timestamp;
        emit Staked(msg.sender, amount);
    }

    function withdraw(uint256 amount) external {
        updateReward(msg.sender);
        require(amount > 0, "Cannot withdraw 0");
        stakedBalance[msg.sender] -= amount;
        teaToken.transfer(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }

    function getReward() external {
        updateReward(msg.sender);
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            address rewardAddress = rewardAddresses[msg.sender]; // 获取用户选择的收益类型地址
            require(rewardAddress != address(0), "Reward address not set");
            IERC20(rewardAddress).transfer(msg.sender, reward); // 转账相应的收益
            emit RewardPaid(msg.sender, reward);
        }
    }

    function updateReward(address account) internal {
        if (block.timestamp > lastUpdateTime[account]) {
            uint256 rewardPerToken = calculateRewardPerToken();
            rewards[account] += (rewardPerToken * stakedBalance[account]) / (10**18);
            lastUpdateTime[account] = block.timestamp;
        }
    }

    function calculateRewardPerToken() internal view returns (uint256) {
        uint256 totalStaked = teaToken.balanceOf(address(this));
        if (totalStaked == 0) return 0;
        return (10**18 * teaToken.balanceOf(address(this))) / totalStaked;
    }
}
