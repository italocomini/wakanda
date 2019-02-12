const bookshelf = require('../bookshelf');

const Project = bookshelf.Model.extend({
  tableName: 'projects',
});

module.exports = Project;
