const tasks = require('./task.model');

module.exports.index = (request, response) => response.json(tasks);

module.exports.destroy = (request, response) => response.json(tasks);
