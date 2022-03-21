const getAllMovies = require('./getAllMovies.service');
const pickRandomElement = require('./pickRandomElement.service');

const filterByDuration = (movies, duration) => {
  const range = 10;
  const moviesOnRange = movies.filter(
    movie =>
      Number(movie.runtime) >= duration - range &&
      Number(movie.runtime) <= duration + range,
  );

  if (!moviesOnRange.length) {
    return [];
  }
  return moviesOnRange;
};

const searchByDuration = async duration => {
  const allMovies = await getAllMovies();
  const filteredMovies = filterByDuration(allMovies, duration);
  if (filteredMovies.length === 0) {
    return filteredMovies;
  }
  return pickRandomElement(filteredMovies);
};

module.exports = {
  searchByDuration,
  filterByDuration,
};
