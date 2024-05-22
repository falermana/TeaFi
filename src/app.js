const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./apiRoutes');

app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
