const getAllMovies = require('./getAllMovies.service');

const filterByGenres = (arr, genres) => {
  const result = arr.filter(movie => {
    return movie.genres.some(genre => {
      return genres.includes(genre);
    });
  });

  return result;
};

const sortByGenres = (arr, genres) => {
  return arr.sort((a, b) => {
    return (
      b.genres.filter(genre => genres.includes(genre)).length -
      a.genres.filter(genre => genres.includes(genre)).length
    );
  });
};

const searchByGenres = async genres => {
  const allMovies = await getAllMovies();
  const filteredMovies = filterByGenres(allMovies, genres);
  if (filteredMovies.length === 0) {
    return filteredMovies;
  }
  const sortedMovies = sortByGenres(filteredMovies, genres);

  return sortedMovies;
};

module.exports = {
  searchByGenres,
  filterByGenres,
  sortByGenres,
};
