const Route = require("express").Router();
const { getContactById, getContacts, postContacts, putContacts, deleteContacts } = require("../controllers/contactsController");

Route.get("/", getContacts);
Route.post("/", postContacts);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getContactById)
    .put(putContacts)
    .delete(deleteContacts);

module.exports = Route;