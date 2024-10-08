'use strict';
const movies = [
  {
    title: "Inception",
    description: "A skilled thief enters the subconscious to pull off a heist.",
    release_date: "2010-07-16",
    duration_movie: 148,
    country: "USA",
    language: "English",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Parasite",
    description: "A poor family schemes to become employed by a wealthy household.",
    release_date: "2019-05-30",
    duration_movie: 132,
    country: "South Korea",
    language: "Korean",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Interstellar",
    description: "Explorers undertake a mission to save humanity by finding a new home.",
    release_date: "2014-11-07",
    duration_movie: 169,
    country: "USA",
    language: "English",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control to his son.",
    release_date: "1972-03-24",
    duration_movie: 175,
    country: "USA",
    language: "English",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Spirited Away",
    description: "A young girl becomes trapped in a mysterious world of spirits.",
    release_date: "2001-07-20",
    duration_movie: 125,
    country: "Japan",
    language: "Japanese",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, and a pair of bandits intertwine.",
    release_date: "1994-10-14",
    duration_movie: 154,
    country: "USA",
    language: "English",
    created_at: new Date(),
    updated_at: new Date()

  },
  {
    title: "Amélie",
    description: "A shy waitress decides to change the lives of those around her for the better.",
    release_date: "2001-04-25",
    duration_movie: 122,
    country: "France",
    language: "French",
    created_at: new Date(),
    updated_at: new Date()

  },
  {
    title: "The Dark Knight",
    description: "Batman faces a rising criminal mastermind known as the Joker.",
    release_date: "2008-07-18",
    duration_movie: 152,
    country: "USA",
    language: "English",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Life Is Beautiful",
    description: "A father uses humor to shield his son from the horrors of a concentration camp.",
    release_date: "1997-12-20",
    duration_movie: 116,
    country: "Italy",
    language: "Italian",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "City of God",
    description: "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths.",
    release_date: "2002-08-30",
    duration_movie: 130,
    country: "Brazil",
    language: "Portuguese",
    created_at: new Date(),
    updated_at: new Date()
  }
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('movies', movies);
    
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('movies', null);
     
  }
};
