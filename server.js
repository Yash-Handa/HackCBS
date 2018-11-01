const express = require('express');
const path = require('path');

const port = 1998;
const app = express();

app.get('/', (req,res) => {
  res.render('index', path.join(__dirname, 'src', 'views'));
});

app.listen(port, () => {
  console.log('server is running at port 1998 ....');
});
