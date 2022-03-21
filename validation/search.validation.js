const Joi = require('joi');
const { genres } = require('../db.json');

const searchValidationSchema = Joi.object({
  genres: Joi.array().items(
    Joi.string()
      .valid(...genres)
      .required(),
  ),
  duration: Joi.number().positive(),
});

module.exports = searchValidationSchema;
