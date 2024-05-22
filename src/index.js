
const web3 = require('web3');
const config = require('./config');
const TeaStakingContract = require('./build/contracts/TeaStaking.json');
const RewardService = require('./rewardService');
const UserService = require('./userService');
const RewardScheduler = require('./rewardScheduler');
const AdminService = require('./adminService');
const Logger = require('./logger');
const ErrorHandler = require('./errorHandler');
const express = require('express');
const app = express();
const apiRoutes = require('./apiRoutes');

const web3Instance = new web3(config.web3Provider);
const teaStakingInstance = new web3Instance.eth.Contract(TeaStakingContract.abi, config.contractAddress);

const logger = new Logger();
const errorHandler = new ErrorHandler();
const rewardService = new RewardService(teaStakingInstance);
const userService = new UserService(web3Instance);
const rewardScheduler = new RewardScheduler(rewardService);
const adminService = new AdminService(teaStakingInstance);

app.use(express.json());
app.use('/api', apiRoutes);

rewardScheduler.scheduleRewardDistribution();

app.listen(3000, () => {
  logger.log('Server is running on port 3000');
});
