const express = require('express');
const controller = require('./task.controller');

const api = express.Router();

api.get('/projects/:projectId/tasks', [], controller.findByProject);
api.get('/projects/:projectId/tasks/:id', controller.findById);
api.post('/projects/:projectId/tasks', controller.create);
api.put('/projects/:projectId/tasks/:id', controller.update);
api.delete('/projects/:projectId/tasks/:id', controller.destroy);

module.exports = api;
