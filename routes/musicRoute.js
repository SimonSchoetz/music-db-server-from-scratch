const Route = require("express").Router();
const { getMusicById, getMusic, postMusic, putMusic, deleteMusic } = require("../controllers/musicController");

Route.get("/", getMusic);
Route.post("/", postMusic);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getMusicById)
    .put(putMusic)
    .delete(deleteMusic);

module.exports = Route;