'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING(64),
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    description: { type: DataTypes.TEXT },
    releaseDate: {
      field: "release_date",
      allowNull: false,
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        notNull: true, 
        notEmpty: true 
      }
    },
    durationMovie: {
      field: "duration_movie",
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true, 
        notEmpty: true 
      }
    },
    country: { allowNull: false, type: DataTypes.STRING(32) },
    language: { type: DataTypes.STRING(32) },
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: "movies",
    underscored: true,
  });
  return Movie;
};