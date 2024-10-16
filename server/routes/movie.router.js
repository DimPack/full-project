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
const { paginate } = require("../middlewares/paginate.mw");

const movieRouter = Router();

movieRouter.post("/", createMovie);
movieRouter.get("/", paginate, findAllMovies);

movieRouter
  .route("/:movieId")
  .get(findByPk)
  .delete(checkMovie, deleteMovieByPk)
  .patch(checkMovie, updateMovieByPk);

movieRouter.post(
  "/:movieId/genres/:genreId",
  checkMovie,
  checkGenre,
  addMovieToGenre
);

module.exports = movieRouter;
