/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const { AbstractError, InternalServerError, NotFound } = require('./exceptions');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

app.use((req, res, next) => {
  next(new NotFound());
});

app.use((err, req, res, next) => {
  logger.error(`path: ${req.originalUrl} | error: ${err} | stack: ${err.stack}`);

  delete err.stack;

  if (err instanceof AbstractError) {
    const { name, statusCode, message } = err;
    return res.status(statusCode).json({
      name,
      statusCode,
      message,
    });
  }
  return res.status(500).json(new InternalServerError());
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;
