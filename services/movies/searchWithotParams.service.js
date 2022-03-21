const getAllMovies = require('./getAllMovies.service');
const pickRandomElement = require('./pickRandomElement.service');

const searcWithoutrParams = async () => {
  const allMovies = await getAllMovies();
  if (allMovies.length === 0) {
    return allMovies;
  }
  return pickRandomElement(allMovies);
};

module.exports = searcWithoutrParams;
