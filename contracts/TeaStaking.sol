// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol"; 

contract TeaStaking {
    IERC20 public teaToken;
    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public lastUpdateTime;
    mapping(address => uint256) public rewards;
    mapping(address => address) public rewardAddresses;
    mapping(address => uint256) public stakePeriods; // 新增：存储用户的质押期限
    address public admin;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);
    event RewardTypeSet(address indexed user, string rewardType); // 新增：设置收益类型事件

    constructor(address _teaToken) {
        teaToken = IERC20(_teaToken);
        admin = msg.sender; // 合约部署者作为管理员
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    function stake(uint256 amount, uint256 period, address rewardAddress) external {
        updateReward(msg.sender);
        require(amount > 0, "Cannot stake 0");
        teaToken.transferFrom(msg.sender, address(this), amount);
        stakedBalance[msg.sender] += amount;
        rewardAddresses[msg.sender] = rewardAddress;
        stakePeriods[msg.sender] = period; // 设置用户的质押期限
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
            address rewardAddress = rewardAddresses[msg.sender];
            require(rewardAddress != address(0), "Reward address not set");
            IERC20(rewardAddress).transfer(msg.sender, reward);
            emit RewardPaid(msg.sender, reward);
        }
    }

    function setRewardType(address user, string memory rewardType) external onlyAdmin {
        // 设置用户的收益类型
        // 可以根据需要进一步扩展，比如检查合法性等
        emit RewardTypeSet(user, rewardType);
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
