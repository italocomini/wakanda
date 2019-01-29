exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.string('title', 100).notNullable();
    table.text('description');
    table.timestamp('created_at', 6).notNullable().defaultTo(knex.fn.now(6));
    table.timestamp('updated_at');
  }),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('tasks')]);
