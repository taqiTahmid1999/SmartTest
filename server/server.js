const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
