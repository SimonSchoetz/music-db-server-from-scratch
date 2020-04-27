const createError = require("http-errors");
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
        const user = new User.findByIdAndUpdate
        await user.save()
        console.log("New user has been added")
        res.json({ success: true, user: user });
    }
    catch (err) {
        next(err)
    }

};

exports.putUser = async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, user, { new: true }); // true, to show the new user in the update message
        if (!updateUser) throw createError(500);
        res.json({ success: true, user: updateUser });
    }
    catch (err) {
        next(err)
    }
    res.json({ success: true, user: user });
};

exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) throw createError(404)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
};