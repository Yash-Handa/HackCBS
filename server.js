const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug');
const path = require('path');

const port = 1998;
const app = express();

app.use(morgan('short'));

app.get('/', (req, res) => {
  res.render('index', path.join(__dirname, 'src', 'views'));
});

app.listen(port, () => {
  debug(
    `${chalk.blue('Server is running on port ')}${chalk.white.bgBlue(
      port,
    )}${chalk.blue('...')}`,
  );
});
