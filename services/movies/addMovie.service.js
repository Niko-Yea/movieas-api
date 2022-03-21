const getAllMovies = require('./getAllMovies.service');
const updateMoviesList = require('./updateMoviesList.service');
const shortid = require('shortid');

const addMovie = async body => {
  try {
    const movies = await getAllMovies();
    const newMovie = { id: shortid.generate(), ...body };
    const newMoviesList = [...movies, newMovie];
    await updateMoviesList(newMoviesList);
    return newMovie;
  } catch (error) {
    console.log(error);
  }
};

module.exports = addMovie;
