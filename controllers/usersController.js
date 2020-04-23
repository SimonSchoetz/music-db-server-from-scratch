const createError = require("http-errors");
const db = require("../models/db");
const User = require("../models/userSchema");

exports.getUser = (req, res, next) => {
    try {
        const users = await User.find()
        res.json({ success: true, users: users });
    }
    catch (err) {
        next(err)
    }
};

exports.getUserById = (req, res, next) => {
    const { id } = req.params;
    try {
        const users = await User.findById(id);
        if (!user) throw createError(404);
        res.json({ success: true, users: users });
    }
    catch (err) {
        next(err)
    }
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