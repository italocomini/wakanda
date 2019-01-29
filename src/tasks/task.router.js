const express = require('express');
const controller = require('./task.controller');

const api = express.Router();

api.get('/tasks', [], controller.index);
api.get('/tasks/:id', controller.findById);
api.post('/tasks', controller.create);
api.put('/tasks/:id', controller.update);
api.delete('/tasks/:id', controller.destroy);

module.exports = api;
