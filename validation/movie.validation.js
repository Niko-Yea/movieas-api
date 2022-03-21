const Joi = require('joi');
const { genres } = require('../db.json');

const movieValidationSchema = Joi.object({
  title: Joi.string().max(255).required(),
  genres: Joi.array()
    .items(
      Joi.string()
        .valid(...genres)
        .required(),
    )
    .required(),
  year: Joi.number().positive().required(),
  runtime: Joi.number().positive().required(),
  director: Joi.string().max(255).required(),
  actors: Joi.string(),
  plot: Joi.string(),
  posterUrl: Joi.string(),
});

module.exports = movieValidationSchema;
