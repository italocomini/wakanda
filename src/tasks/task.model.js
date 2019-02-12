const bookshelf = require('../bookshelf');
const Project = require('../projects/project.model');

const Task = bookshelf.Model.extend({
  tableName: 'tasks',
  project() {
    return this.belongsTo(Project);
  },
});

module.exports = Task;
