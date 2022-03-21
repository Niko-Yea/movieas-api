const express = require('express');
const router = express.Router();

const { controllerWrapper } = require('../../middlewares');
const ctrl = require('../../controllers/movies');

router.get('/', controllerWrapper(ctrl.getAll));

router.post('/add', controllerWrapper(ctrl.addMovie));

router.post('/search', controllerWrapper(ctrl.searchMovies));

module.exports = router;
