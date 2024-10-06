"use strict";

const genresMovies = [
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
  "War",
  "Western",
];
const generateGenre = (key) => ({
  name: `${key}`,
  created_at: new Date(),
  updated_at: new Date(),
});
const generateGenres = () => genresMovies.map((key) => generateGenre(key));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("genres", generateGenres());
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genres", null, {});
  },
};
