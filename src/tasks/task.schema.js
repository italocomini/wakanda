const Joi = require('joi');

const createTaskSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
});

module.exports = createTaskSchema;
