const Route = require("express").Router();
const { getUserById, getUser, postUser, putUser, deleteUser, login } = require("../controllers/usersController");
const { validUserInputs } = require("../middleware/usersValidator");

Route.get("/", getUser);
Route.post("/", validUserInputs(), postUser);
Route.post("/login", login)
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getUserById)
    .put(putUser)
    .delete(deleteUser);

module.exports = Route;