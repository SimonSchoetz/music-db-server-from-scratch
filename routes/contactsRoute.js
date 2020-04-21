const Route = require("express").Router();
const { getContact, postContact, putContact, deleteContact } = require("../controllers/contactsController");

Route.get("/", getContact);
Route.get("/", postContact);
Route.get("/", putContact);
Route.get("/", deleteContact);