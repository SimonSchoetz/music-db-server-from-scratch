const Route = require("express").Router();
const { getOrderById, getOrders, postOrders, putOrders, deleteOrders } = require("../controllers/ordersController");
const auth = require("../middleware/tokenAuthenticator");
const isAdmin = require("../middleware/rolesAuthenticator");

Route.get("/", auth, isAdmin, getOrders);
Route.post("/", postOrders);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(auth, isAdmin, getOrderById)
    .put(auth, putOrders)
    .delete(auth, deleteOrders);

module.exports = Route;