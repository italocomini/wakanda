/* eslint-disable import/order */
const knex = require('knex')(require('../knexfile').development);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('pagination');

module.exports = bookshelf;
