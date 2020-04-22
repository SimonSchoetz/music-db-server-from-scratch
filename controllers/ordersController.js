const db = require("../models/db");

exports.getOrders = (req, res, next) => {
    let order = db.get("orders").value()
    res.json({ success: true, order: order });
};

exports.getOrderById = (req, res, next) => {
    const { id } = req.params;
    let order = db.get("orders").find({ id })
    res.json({ success: true, order: order })
};

exports.postOrders = (req, res, next) => {
    db.get("orders").push(req.body).last().assign({ id: new Date().toString() }).write();
};
exports.putOrders = (req, res, next) => {
    const { id } = req.params;
    const order = req.body;
    db.get("orders").find({ id }).assign(order).write();
    res.json({ success: true, order: order });
};
exports.deleteOrders = (req, res, next) => {
    const { id } = req.params;
    let order = db.get("orders").remove({ id }).write();
    res.json({ success: true, order: order })
};