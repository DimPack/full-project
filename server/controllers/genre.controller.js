const { Genre } = require("../models");

module.exports.createGenre = async (req, res, next) => {
 try {
    const { body } = req;
    const newGenre = await Genre.create(body);
  } catch (error) {
      next(error);
    }
};
//PFM2024-1_Sequelize_associate_one_to_many_109_1
//11:46