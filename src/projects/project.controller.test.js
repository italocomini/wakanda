const request = require('supertest');
const { knex } = require('../db');
const app = require('../app');

const agent = request.agent(app);

beforeAll((done) => {
  knex.migrate.rollback().then(() => {
    knex.migrate.latest().then(async () => {
      await knex.seed.run();
      done();
    });
  });
});

afterAll((done) => {
  knex.migrate.rollback().then(() => {
    done();
  });
});

describe('GET /projects', () => {
  it('deve retornar uma lista de projetos paginada', async (done) => {
    const response = await agent.get('/projects');
    expect(response.body.meta.page).toBe(1);
    expect(response.statusCode).toBe(200);
    done();
  });
});

describe('GET /projects/:id', () => {
  it('deve retornar status 404', async (done) => {
    const response = await agent.get('/projects/123');
    expect(response.statusCode).toBe(404);
    done();
  });

  it('deve retornar um projeto', async (done) => {
    const response = await agent.get('/projects/1');
    expect(response.statusCode).toBe(200);
    done();
  });
});

describe('POST /projects', () => {
  it('deve criar um projeto', async (done) => {
    const response = await agent.post('/projects').send({
      title: 'Levantam dúvidas sobre se o desafiador',
      description:
        'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o desafiador cenário globalizado apresenta tendências no sentido de aprovar a manutenção dos procedimentos normalmente adotados.',
    });
    expect(response.statusCode).toBe(200);
    done();
  });
});

describe('PUT /projects/:id', () => {
  it('deve atualizar um projeto', async (done) => {
    const response = await agent.put('/projects/1').send({
      title: 'P1 Alterado',
      description: 'PD1 Alterado',
    });
    expect(response.statusCode).toBe(200);
    done();
  });
});
