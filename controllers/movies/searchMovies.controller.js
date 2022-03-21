const moviesService = require('../../services/movies');
const { BadRequest } = require('http-errors');
const validationSchema = require('../../validation');

const searchMovies = async (req, res) => {
  const { error } = validationSchema.searchValidationSchema.validate(req.body);
  if (error) {
    throw new BadRequest(error.message);
  }

  const { genres, duration } = req.body;

  if (!genres && !duration) {
    const result = await moviesService.searchWithoutrParams();
    return res.status(200).json(result);
  }

  if (duration && !genres) {
    const result = await moviesService.searchByDuration(duration);
    return res.status(200).json(result);
  }

  if (genres && !duration) {
    const result = await moviesService.searchByGenres(genres);
    return res.status(200).json(result);
  }

  if (genres && duration) {
    const result = await moviesService.searchByGenresAndDuration(
      genres,
      duration,
    );
    return res.status(200).json(result);
  }
};

module.exports = searchMovies;
