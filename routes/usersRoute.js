const Route = require("express").Router();
const { getUserById, getUser, postUser, putUser, deleteUser } = require("../controllers/usersController");

Route.get("/", getUser);
Route.post("/", postUser);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getUserById)
    .put(putUser)
    .delete(deleteUser);

module.exports = Route;