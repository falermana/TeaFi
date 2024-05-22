const express = require('express');
const app = express();
const port = 3000;

// 在这里导入其他需要的模块和设置路由

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
