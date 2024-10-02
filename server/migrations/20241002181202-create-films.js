'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      description: {
        type: Sequelize.TEXT
      },
      genreId: {
        field: 'genre_id',
        allowNull: false,
        type: Sequelize.INTEGER
      },
      releaseDate: {
        field: 'release_date',
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      durationMovie: {
        field: 'duration_movie',
        allowNull: false,
        type: Sequelize.INTEGER
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      language: {
        type: Sequelize.STRING(32)
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};