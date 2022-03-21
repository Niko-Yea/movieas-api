const getAllMovies = require('./getAllMovies.service');
const getAllGenres = require('./getAllGenres.service');
const addMovie = require('./addMovie.service');
const searchWithoutrParams = require('./searchWithotParams.service');
const { searchByDuration } = require('./searchByDuration.service');
const { searchByGenres } = require('./searchByGenres.service');
const searchByGenresAndDuration = require('./searchByGenresAndDuration.service');

module.exports = {
  getAllMovies,
  getAllGenres,
  addMovie,
  searchWithoutrParams,
  searchByDuration,
  searchByGenres,
  searchByGenresAndDuration,
};
