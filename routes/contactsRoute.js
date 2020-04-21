const Route = require("express").Router();
const { getContacts, postContacts, putContacts, deleteContacts } = require("../controllers/contactsController");

Route.get("/", getContacts);
Route.post("/", postContacts);
//Alternative syntax for practice purposes
Route.route("/")
    .put(putContacts)
    .delete(deleteContacts);

module.exports = Route;