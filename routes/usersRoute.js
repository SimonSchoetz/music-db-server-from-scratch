const Route = require("express").Router();
const { getUserById, getUser, postUser, putUser, deleteUser } = require("../controllers/usersController");
const { validUserInputs } = require("./middleware/usersValidator");

Route.get("/", getUser);
Route.post("/", validUserInputs(), postUser);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getUserById)
    .put(putUser)
    .delete(deleteUser);

module.exports = Route;