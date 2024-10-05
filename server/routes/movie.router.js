const { Router } = require("express");
const { createMovie, findAllMovies, findByPk, deleteMovieByPk, updateMovieByPk } = require("../controllers/movie.controller");

const movieRouter = Router();

movieRouter.post("/", createMovie);
movieRouter.get("/", findAllMovies);

movieRouter.get("/:movieId", findByPk);
movieRouter.delete("/:movieId", deleteMovieByPk);

movieRouter.patch("/:movieId", updateMovieByPk)
module.exports = movieRouter;
