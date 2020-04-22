const db = require("../models/db");

exports.getOrders = (req, res, next) => {
    let order = db.get("order").value()
    res.json({ success: true, order: order });
};

exports.getOrdersById = (req, res, next) => {
    const { id } = req.params;
    let order = db.get("order").find({ id })
    res.json({ success: true, order: order })
};

exports.postOrders = (req, res, next) => {
    db.get("order").push(req.body).last().assign({ id: new Date().toString() }).write();
};
exports.putOrders = (req, res, next) => {
    const { id } = req.params;
    const order = req.body;
    db.get("order").find({ id }).assign(order).write();
    res.json({ success: true, order: order });
};
exports.deleteOrders = (req, res, next) => {
    const { id } = req.params;
    let order = db.get("order").remove({ id }).write();
    res.json({ success: true, order: order })
};