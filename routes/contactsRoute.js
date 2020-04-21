const Route = require("express").Router();
const { getContacts, postContacts, putContacts, deleteContacts } = require("../controllers/contactsController");

Route.get("/", getContacts);
// Route.post("/", postContacts);
// Route.put("/", putContacts);
// Route.delete("/", deleteContacts);

module.exports = Route;