const { Movie, Genre } = require("../models");

module.exports.createMovie = async (req, res, next) => {
  try {
    const { body } = req;
    const newMovie = await Movie.create(body);
    res.status(201).send({ data: newMovie });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllMovies = async (req, res, next) => {
  const { body } = req;
  const { pagination } = req;

  const allMovies = await Movie.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    ...pagination,
    include: ["genres"],
  });
  res.status(200).send({ data: allMovies });
  try {
  } catch (error) {
    next(error);
  }
};
module.exports.findByPk = async (req, res, next) => {
  try {
    const {
      params: { movieId },
    } = req;
    const movieInstance = await Movie.findByPk(movieId, {
      include: ["genres"],
    });
    res.status(200).send({ data: movieInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteMovieByPk = async (req, res, next) => {
  try {
    const { movieInstance } = req;
    await movieInstance.destroy();
    res.status(200).send({ data: movieInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.updateMovieByPk = async (req, res, next) => {
  try {
    const { movieInstance, body } = req;
    await movieInstance.update(body);
    res.status(200).send({ data: movieInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.addMovieToGenre = async (req, res, next) => {
  try {
    const { genreInstance, movieInstance } = req;
    if (!genreInstance || !movieInstance) {
      return res.status(404).send({ error: "Genre or Movie not found" });
    }
    await genreInstance.addMovie(movieInstance);
    res.status(200).send({ data: genreInstance });
  } catch (error) {
    next(error);
  }
};
