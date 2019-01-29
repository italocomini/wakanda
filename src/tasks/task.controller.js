const Task = require('./task.model');
const createTaskSchema = require('./task.schema');
const { NotFound } = require('../exceptions');

module.exports.index = async (req, res, next) => {
  try {
    const pageable = {
      pageSize: req.query.pageSize || 10,
      page: req.query.page || 1,
    };
    const tasks = await Task.fetchPage(pageable);
    return res.json({ data: tasks.models, meta: tasks.pagination });
  } catch (err) {
    return next(err);
  }
};

module.exports.findById = async (req, res, next) => {
  try {
    const task = await Task.where({ id: req.params.id }).fetch();
    if (task === null) {
      throw new NotFound(`Recurso ${req.params.id} não foi encontrado`);
    }
    return res.json(task);
  } catch (err) {
    return next(err);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const { error, value } = createTaskSchema.validate(req.body, { abortEarly: false });
    if (error !== null) {
      const errorMessage = error.details.map(d => d.message);
      return res.status(400).send(errorMessage);
    }
    const task = new Task(value);
    return res.json(await task.save());
  } catch (error) {
    return next(error);
  }
};

module.exports.update = async (req, res) => {
  const taskRequest = { title: req.body.title, description: req.body.description };
  const task = await new Task({ id: req.params.id }).save(taskRequest, { patch: true });
  res.json(task);
};

module.exports.destroy = async (req, res) => {
  new Task({ id: req.params.id }).destroy();
  res.status(204).send();
};
