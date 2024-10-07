"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.belongsToMany(models.Movie, {
        through: "movies_to_genres",
        foreignKey: "genreId",
      })
    }
  }
  Genre.init(
    {
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Genre",
      tableName: "genres",
      underscored: true
    }
  );
  return Genre;
};
