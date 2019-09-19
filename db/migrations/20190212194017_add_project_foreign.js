exports.up = (knex) => knex.schema.alterTable('tasks', (table) => {
  table.integer('project_id').unsigned();
  table.foreign('project_id').references('projects.id').withKeyName('fk_tasks__projects');
});

// Não está funcionando nas versão atual do knex
// exports.down = (knex) => knex.schema.alterTable('tasks', (table) => {
//   table.dropForeign('project_id', ['fk_tasks__projects']);
//   table.dropUnique('project_id', ['fk_tasks__projects']);
//   table.dropColumns('project_id');
// });

module.exports.down = async (knex) => {
  const sql = 'ALTER TABLE tasks DROP FOREIGN KEY fk_tasks__projects;';
  await knex.raw(sql);
};
