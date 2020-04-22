const Route = require("express").Router();
const { getOrderById, getOrders, postOrders, putOrders, deleteOrders } = require("../controllers/ordersController");

Route.get("/", getOrders);
Route.post("/", postOrders);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getOrderById)
    .put(putOrders)
    .delete(deleteOrders);

module.exports = Route;