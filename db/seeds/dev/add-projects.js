const projects = [
  { id: 1, title: 'P1', description: 'PD1' },
  { id: 2, title: 'P2', description: 'PD2' },
  { id: 3, title: 'P3', description: 'PD3' },
];

exports.seed = (knex) => knex('projects').del().then(() => knex('projects').insert(projects));
