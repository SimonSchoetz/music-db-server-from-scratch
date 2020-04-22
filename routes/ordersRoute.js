const Route = require("express").Router();
const { getOrderById, getOrder, postOrder, putOrder, deleteOrder } = require("../controllers/orderController");

Route.get("/", getOrder);
Route.post("/", postOrder);
//Alternative syntax for practice purposes
Route.route("/:id")
    .get(getOrderById)
    .put(putOrder)
    .delete(deleteOrder);

module.exports = Route;