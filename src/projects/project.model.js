const { bookshelf } = require('../db');

const Project = bookshelf.Model.extend({
  tableName: 'projects',
  requireFetch: false,
});

module.exports = Project;
