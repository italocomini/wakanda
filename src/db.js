require('dotenv').config();

const knex = require('knex');
const bookshelf = require('bookshelf');
const knexConfig = require('../knexfile');

const knexInstance = knex(knexConfig.development);
const bookshelfInstance = bookshelf(knexInstance);

exports.knex = knexInstance;
exports.bookshelf = bookshelfInstance;
