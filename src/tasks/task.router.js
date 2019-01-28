const express = require('express');
const controller = require('./task.controller');

const api = express.Router();

api.get('/tasks', [], controller.index);
api.delete('/tasks', [], controller.destroy);

module.exports = api;
