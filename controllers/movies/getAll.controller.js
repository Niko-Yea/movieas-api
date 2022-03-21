const moviesServices = require('../../services/movies');

const getAll = async (req, res) => {
  const allMovies = await moviesServices.getAllMovies();
  res.json(allMovies);
};

module.exports = getAll;
