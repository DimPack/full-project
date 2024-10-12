const { Router } = require("express");
const {
  createGenre,
  getAllGenres,
  findGenre,
  deleteGenre,
} = require("../controllers/genre.controller");
const { checkGenre } = require("../middlewares/genre.mw");

const genreRouter = Router();

genreRouter.post("/", createGenre);
genreRouter.get("/", getAllGenres);

genreRouter.get("/:genreId", checkGenre, findGenre);
genreRouter.delete("/:genreId", checkGenre, deleteGenre);

module.exports = genreRouter;
