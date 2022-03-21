const moviesService = require('../../services/movies');
const updateMoviesList = require('../../services/movies/updateMoviesList.service');

describe('Add movie', () => {
  let movieId;
  const testEntity = {
    title: 'Test Movie',
    year: '2022',
    runtime: '130',
    genres: ['Biography', 'Comedy', 'Drama'],
    director: 'Some Author',
  };
  test('Add movie', async () => {
    const result = await moviesService.addMovie(testEntity);
    movieId = result.id;
    expect(result).toBeDefined();
  });

  afterEach(async () => {
    const movies = await moviesService.getAllMovies();
    const newList = movies.filter(
      movie => String(movieId) !== String(movie.id),
    );
    await updateMoviesList(newList);
  });
});
