const createError = require("http-errors");
const { Genre } = require("../models");

module.exports.checkGenre = async (req, res, next) => {
  try {
    const {
      params: { genreId },
    } = req;
    const genreInstance = await Genre.findByPk(genreId);
    if (!genreInstance) {
      return next(createError(404, "Genre not found"));
    }
    req.genreInstance = genreInstance;
    next();
  } catch (error) {
    next(error);
  }
};
