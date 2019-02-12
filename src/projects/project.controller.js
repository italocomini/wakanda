const Project = require('./project.model');
const createProjectSchema = require('./project.schema');
const { NotFound } = require('../exceptions');
const logger = require('../logger');

module.exports.index = async (req, res, next) => {
  try {
    const pageable = {
      pageSize: req.query.pageSize || 10,
      page: req.query.page || 1,
    };
    const projects = await Project.fetchPage(pageable);
    return res.json({ data: projects.models, meta: projects.pagination });
  } catch (err) {
    return next(err);
  }
};

module.exports.findById = async (req, res, next) => {
  try {
    const project = await Project.where({ id: req.params.id }).fetch();
    if (project === null) {
      throw new NotFound(`Recurso ${req.params.id} não foi encontrado`);
    }
    return res.json(project);
  } catch (err) {
    logger.error(`/projects/${req.params.id} : ${err.stack}`);
    return next(err);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const { error, value } = createProjectSchema.validate(req.body, { abortEarly: false });
    if (error !== null) {
      const errorMessage = error.details.map(d => d.message);
      return res.status(400).send(errorMessage);
    }
    const project = new Project(value);
    return res.json(await project.save());
  } catch (error) {
    return next(error);
  }
};

module.exports.update = async (req, res) => {
  const projectRequest = { title: req.body.title, description: req.body.description };
  const project = await new Project({ id: req.params.id }).save(projectRequest, { patch: true });
  res.json(project);
};

module.exports.destroy = async (req, res) => {
  new Project({ id: req.params.id }).destroy();
  res.status(204).send();
};
