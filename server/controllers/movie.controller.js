const { Movie } = require("../models");

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
  const allMovies = await Movie.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
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
    const movie = await Movie.findByPk(movieId);
    res.status(200).send({ data: movie });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteMovieByPk = async (req, res, next) => {
 try {
    const {
        params: { movieId },
      } = req;
      const movieInstance = await Movie.findByPk(movieId);
      if (!movieInstance) {
        await next(createError(404, 'Movie not found'));
      }
      await movieInstance.destroy();
    //   const movieDelete = await Movie.destroy({
    //     where: { id: movieId },
    //   });
    //movieDelete - кількість видалених рядків
      res.status(200).send({ data: movieInstance });
    } catch (error) {
      next(error);
    }
};

module.exports.updateMovieByPk = async (req, res, next) => {
 try {
    const {
        params: { movieId },
        body,
      } = req;
      const movieInstance = await Movie.findByPk(movieId);
      if (!movieInstance) {
        return next(createError(404, 'Movie not found'));
      }
      await movieInstance.update(body);
      res.status(200).send({ data: movieInstance });
  } catch (error) {
      next(error);
    }
};