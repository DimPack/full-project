const createError = require("http-errors");
const { Movie } = require("../models");

module.exports.checkMovie = async (req, res, next) => {
  try {
    const {
      params: { movieId },
    } = req;
    const movieInstance = await Movie.findByPk(movieId);
    if (!movieInstance) {
      return next(createError(404, "Movie not found"));
    }
    req.movieInstance = movieInstance;
    next();
  } catch (error) {
    next(error);
  }
};
