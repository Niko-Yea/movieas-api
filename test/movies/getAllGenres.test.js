const moviesService = require('../../services/movies');

describe('Get all movies', () => {
  test('Return all movies', async () => {
    const result = await moviesService.getAllGenres();
    expect(result.length).toBeGreaterThan(0);
  });
});
