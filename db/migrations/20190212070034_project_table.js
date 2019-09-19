const PROJECT_TABLE = 'projects';

exports.up = (knex) => knex.schema.createTable(PROJECT_TABLE, (table) => {
  table.increments();
  table.string('title', 100).notNullable();
  table.text('description');
  table.timestamp('created_at', 6).notNullable().defaultTo(knex.fn.now(6));
  table.timestamp('updated_at').nullable();
});

exports.down = (knex) => knex.schema.dropTable(PROJECT_TABLE);
