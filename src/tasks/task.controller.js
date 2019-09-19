const Task = require('./task.model');
const createTaskSchema = require('./task.schema');

module.exports.findByProject = async (req, res, next) => {
  try {
    const pageable = {
      pageSize: req.query.pageSize || 10,
      page: req.query.page || 1,
    };

    const tasks = await Task.query({ where: { project_id: req.params.projectId } })
      .fetchPage(pageable);

    return res.json({ data: tasks.models, meta: tasks.pagination });
  } catch (err) {
    return next(err);
  }
};

module.exports.findById = async (req, res, next) => {
  try {
    const task = await Task.where({ id: req.params.id }).fetch();
    if (task === null) {
      next(res.e.notFound(`Tarefa #${req.params.id} não foi encontrado`));
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
      const errorMessage = error.details.map((d) => d.message);
      next(res.e.badRequest(errorMessage));
    }
    const task = new Task(value);
    task.set('project_id', req.params.projectId);
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
