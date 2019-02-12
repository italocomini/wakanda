const express = require('express');

const api = express.Router();

api.use(require('./tasks/task.router'));
api.use(require('./projects/project.router'));

module.exports = api;
