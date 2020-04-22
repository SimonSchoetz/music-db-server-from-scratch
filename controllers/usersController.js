const db = require("../models/db");

exports.getUser = (req, res, next) => {
    let user = db.get("users").value()
    res.json({ success: true, user: user });
};

exports.getUserById = (req, res, next) => {
    const { id } = req.params;
    let user = db.get("users").find({ id })
    res.json({ success: true, user: user })
};

exports.postUser = (req, res, next) => {
    db.get("users").push(req.body).last().assign({ id: new Date().toString() }).write();
    res.json({ success: true, user: req.body });
};
exports.putUser = (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    db.get("users").find({ id }).assign(user).write();
    res.json({ success: true, user: user });
};
exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    let user = db.get("users").remove({ id }).write();
    res.json({ success: true, user: user })
};