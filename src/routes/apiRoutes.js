
const express = require('express');
const router = express.Router();

router.get('/user/:address', async (req, res) => {
  // 处理获取用户信息的请求
});

router.post('/admin/change', async (req, res) => {
  // 处理更改管理员地址的请求
});

module.exports = router;
