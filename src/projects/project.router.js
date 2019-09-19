const express = require('express');
const controller = require('./project.controller');

const api = express.Router();

api.get('/projects', controller.index);
api.get('/projects/:id', controller.findById);
api.post('/projects', controller.create);
api.put('/projects/:id', controller.update);
api.delete('/projects/:id', controller.destroy);

module.exports = api;
