'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Films extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Films.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    genreId: DataTypes.INTEGER,
    releaseDate: DataTypes.DATEONLY,
    durationMovie: DataTypes.INTEGER,
    country: DataTypes.STRING,
    language: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Films',
  });
  return Films;
};