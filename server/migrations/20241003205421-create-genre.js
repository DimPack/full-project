'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      action: {
        type: Sequelize.STRING
      },
      adventure: {
        type: Sequelize.STRING
      },
      comedy: {
        type: Sequelize.STRING
      },
      drama: {
        type: Sequelize.STRING
      },
      horror: {
        type: Sequelize.STRING
      },
      thriller: {
        type: Sequelize.STRING
      },
      horror: {
        type: Sequelize.STRING
      },
      scifi: {
        type: Sequelize.STRING
      },
      fantasy: {
        type: Sequelize.STRING
      },
      romance: {
        type: Sequelize.STRING
      },
      mystery: {
        type: Sequelize.STRING
      },
      animation: {
        type: Sequelize.STRING
      },
      documentary: {
        type: Sequelize.STRING
      },
      musical: {
        type: Sequelize.STRING
      },
      crime: {
        type: Sequelize.STRING
      },
      war: {
        type: Sequelize.STRING
      },
      western: {
        type: Sequelize.STRING
      },
      biography: {
        type: Sequelize.STRING
      },
      historical: {
        type: Sequelize.STRING
      },
      family: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Genres');
  }
};