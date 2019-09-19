/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const boomMiddleware = require('./middlewares/boom.middleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(boomMiddleware);
app.use(require('./routes'));

app.use((req, res, next) => {
  next(res.e.notFound());
});

app.use((err, req, res, next) => {
  if (res.e.isBoom(err)) {
    const { payload } = err.output;
    return res.status(payload.statusCode).json(payload);
  }
  logger.error(err);
  return res.status(500).json({ statusCode: 500, error: 'Internal', message: 'Internal' });
});

module.exports = app;
