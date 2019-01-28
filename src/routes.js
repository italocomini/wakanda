const express = require('express');

const api = express.Router();

api.use(require('./tasks/task.router'));

module.exports = api;
