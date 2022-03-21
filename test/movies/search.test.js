const moviesService = require('../../services/movies');

describe('Search', () => {
  let duration;
  let genres;
  beforeEach(() => {
    duration = 120;
    genres = ['Drama', 'Mystery', 'Thriller'];
  });

  test('Search without params', async () => {
    const response = await moviesService.searchWithoutrParams();
    expect(response).toBeDefined();
  });

  test('Search by duration', async () => {
    const response = await moviesService.searchByDuration(duration);
    expect(response).toBeDefined();
    expect(Number(response.runtime)).toBeGreaterThanOrEqual(duration - 10);
    expect(Number(response.runtime)).toBeLessThanOrEqual(duration + 10);
  });

  test('Search by genres', async () => {
    const response = await moviesService.searchByGenres(genres);
    expect(response).toBeDefined();
    expect(response[0].genres).toEqual(genres);
  });

  test('Search by genres and duration', async () => {
    const response = await moviesService.searchByGenresAndDuration(
      genres,
      duration,
    );
    expect(response).toBeDefined();
    expect(response[0].genres).toEqual(genres);
    expect(Number(response[0].runtime)).toBeGreaterThanOrEqual(duration - 10);
    expect(Number(response[0].runtime)).toBeLessThanOrEqual(duration + 10);
  });
});
