const TASK_TABLE = 'tasks';

exports.up = (knex) => knex.schema
  .createTable(TASK_TABLE, (table) => {
    table.increments();
    table.string('title', 100).notNullable();
    table.text('description');
    table.timestamp('created_at', 6).notNullable();
    table.timestamp('updated_at').nullable();
  });

exports.down = (knex) => knex.schema.dropTable(TASK_TABLE);
