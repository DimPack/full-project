const { Genre, Movie } = require("../models");



module.exports.createGenre = async (req, res, next) => {
 try {
  const { body } = req;  
  const newGenre = await Genre.create(body);
  res.status(201).send({ data: newGenre });
  } catch (error) {
      next(error);
    }
};

module.exports.getAllGenres = async (req, res, next) => {
 try {
  const allGenres = await Genre.findAll();
  res.status(200).send({ data: allGenres });
  } catch (error) {
      next(error);
    }
};

// module.exports.addMovieToGenre = async (req, res, next) => {
//  try {
//   const { genreInstance, movieInstance } = req;
//   await genreInstance.addMovie(movieInstance);
//   res.status(200).send({ data: genreInstance });
  
//   } catch (error) {
//       next(error);
//     }
// };
module.exports.addMovieToGenre = async (req, res, next) => {
  try {
    const genreId = req.params.genreId; // Отримати genreId з параметрів
    const movieId = req.params.movieId; // Отримати movieId з параметрів

    // Знайти жанр за genreId
    const genreInstance = await Genre.findByPk(genreId);
    // Знайти фільм за movieId
    const movieInstance = await Movie.findByPk(movieId);

    // Перевірка, чи знайдено жанр та фільм
    if (!genreInstance || !movieInstance) {
      return res.status(404).send({ error: "Genre or Movie not found" });
    }

    await genreInstance.addMovie(movieInstance);

    res.status(200).send({ data: genreInstance });
    
  } catch (error) {
    next(error); 
  }
};

//https://www.youtube.com/watch?v=qcLKou_GQnQ&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=20
//12:11