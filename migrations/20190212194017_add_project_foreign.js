exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('tasks', (table) => {
    table.integer('project_id').unsigned();
    table.foreign('project_id').references('projects.id');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('tasks', (table) => {
    table.dropForeign('project_id', ['tasks_project_id_foreign']);
    table.dropColumns('project_id');
  }),
]);
