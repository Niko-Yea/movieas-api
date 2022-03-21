const { genres } = require('../../db.json');

const getAllGenres = async () => genres;

module.exports = getAllGenres;
