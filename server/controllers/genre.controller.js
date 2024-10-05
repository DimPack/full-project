const { Genre } = require("../models");

module.exports.createGenre = async (req, res, next) => {
 try {
    const { body } = req;
    const newGenre = await Genre.create(body);
  } catch (error) {
      next(error);
    }
};