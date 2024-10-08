const { Router } = require('express');
const { createGenre, getAllGenres, addMovieToGenre } = require('../controllers/genre.controller');

const genreRouter = Router();

genreRouter.post("/", createGenre);
genreRouter.get("/", getAllGenres);

genreRouter.post("/:genreId/movies/:movieId", addMovieToGenre)


module.exports = genreRouter;
