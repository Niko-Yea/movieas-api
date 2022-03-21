const fs = require('fs/promises');
const path = require('path');
const getAllGenres = require('./getAllGenres.service');

const dbPath = path.join(__dirname, '../../', 'db.json');

const updateMoviesList = async movies => {
  const genres = await getAllGenres();
  await fs.writeFile(dbPath, JSON.stringify({ genres, movies }));
  return true;
};

module.exports = updateMoviesList;
