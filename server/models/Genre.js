'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genre.init({
    action: DataTypes.STRING,
    adventure: DataTypes.STRING,
    comedy: DataTypes.STRING,
    drama: DataTypes.STRING,
    horror: DataTypes.STRING,
    thriller: DataTypes.STRING,
    horror: DataTypes.STRING,
    scifi: DataTypes.STRING,
    fantasy: DataTypes.STRING,
    romance: DataTypes.STRING,
    mystery: DataTypes.STRING,
    animation: DataTypes.STRING,
    documentary: DataTypes.STRING,
    musical: DataTypes.STRING,
    crime: DataTypes.STRING,
    war: DataTypes.STRING,
    western: DataTypes.STRING,
    biography: DataTypes.STRING,
    historical: DataTypes.STRING,
    family: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};