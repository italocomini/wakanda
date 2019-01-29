const bookshelf = require('../bookshelf');

const Task = bookshelf.Model.extend({
  tableName: 'tasks',
});

module.exports = Task;
