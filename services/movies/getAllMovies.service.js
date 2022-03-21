const { movies } = require('../../db.json');

const getAllMovies = async () => movies;

module.exports = getAllMovies;
