const { searchByGenres } = require('./searchByGenres.service');
const { filterByDuration } = require('./searchByDuration.service');

const searchByGenresAndDuration = async (genres, duration) => {
  const moviesByGenres = await searchByGenres(genres);
  const filteredArray = filterByDuration(moviesByGenres, duration);

  return filteredArray;
};

module.exports = searchByGenresAndDuration;
