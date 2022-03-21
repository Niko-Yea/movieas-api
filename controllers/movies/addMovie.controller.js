const moviesService = require('../../services/movies');
const { BadRequest } = require('http-errors');

const validationSchema = require('../../validation');

const addMovie = async (req, res) => {
  const { error } = validationSchema.movieValidationSchema.validate(req.body);

  if (error) {
    throw new BadRequest(error.message);
  }

  const result = await moviesService.addMovie(req.body);
  res.status(201).json(result);
};

module.exports = addMovie;
