const Joi = require('joi');

const createTaskSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  project_id: Joi.number().required(),
});

module.exports = createTaskSchema;
