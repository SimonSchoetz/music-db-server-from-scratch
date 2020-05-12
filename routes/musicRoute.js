const Route = require("express").Router();
const { getMusicById, getMusic, postMusic, putMusic, deleteMusic } = require("../controllers/musicController");
const auth = require("../middleware/tokenAuthenticator");
const isAdmin = require("../middleware/rolesAuthenticator");

Route.get("/", auth, getMusic);
Route.post("/post", auth, isAdmin, postMusic);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(auth, getMusicById)
    .put(auth, isAdmin, putMusic)
    .delete(auth, isAdmin, deleteMusic);

module.exports = Route;