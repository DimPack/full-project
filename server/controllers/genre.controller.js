const { Genre } = require("../models");

module.exports.createGenre = async (req, res, next) => {
  try {
    const { body } = req;
    const newGenre = await Genre.create(body);
    res.status(201).send({ data: newGenre });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllGenres = async (req, res, next) => {
  try {
    const allGenres = await Genre.findAll();
    res.status(200).send({ data: allGenres });
  } catch (error) {
    next(error);
  }
};

module.exports.findGenre = async (req, res, next) => {
  try {
    const { genreInstance } = req;

    res.status(200).send({ data: genreInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteGenre = async (req, res, next) => {
  try {
    const { genreInstance } = req;
    await genreInstance.destroy();
    res.status(200).send({ data: genreInstance });
  } catch (error) {
    next(error);
  }
};