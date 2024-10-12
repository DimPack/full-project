const { Router } = require("express");
const {
  createMovie,
  findAllMovies,
  findByPk,
  deleteMovieByPk,
  updateMovieByPk,
  addMovieToGenre,
} = require("../controllers/movie.controller");
const { checkMovie } = require("../middlewares/movie.mw");
const { checkGenre } = require("../middlewares/genre.mw");

const movieRouter = Router();

movieRouter.post("/", createMovie);
movieRouter.get("/", findAllMovies);

movieRouter.get("/:movieId",  findByPk);
movieRouter.delete("/:movieId", checkMovie, deleteMovieByPk);

movieRouter.patch("/:movieId", checkMovie, updateMovieByPk);
movieRouter.post("/:movieId/genres/:genreId", checkMovie, checkGenre, addMovieToGenre);

module.exports = movieRouter;
