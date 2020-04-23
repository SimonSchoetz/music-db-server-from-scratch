const createError = require("http-errors");
const db = require("../models/db");
const User = require("../models/usersSchema");

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json({ success: true, users: users });
    }
    catch (err) {
        next(err)
    }
};

exports.getUserById = async (req, res, next) => {
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

exports.postUser = async (req, res, next) => {

    try {
        const user = new User({ //creates user with fake data
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            pw: req.body.pw
        });
        await user.save()
        console.log("New user has been added")
        res.json({ success: true, user: req.body });
    }
    catch (err) {
        next(err)
    }

};

exports.putUser = (req, res, next) => {
    try { }
    catch (err) {
        next(err)
    }
    const { id } = req.params;
    const user = req.body;
    res.json({ success: true, user: user });
};

exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    let user = db.get("users").remove({ id }).write();
    res.json({ success: true, user: user })
};