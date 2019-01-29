/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const bodyParser = require('body-parser');
const { NotFound } = require('./exceptions');
const logger = require('./logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

app.use((req, res, next) => {
  next(new NotFound());
});

app.use((err, req, res, next) => {
  logger.error(err);
  if (req.app.get('env') === 'production') {
    delete err.stack;
  }
  return res.status(err.statusCode || 500).json(err);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;
