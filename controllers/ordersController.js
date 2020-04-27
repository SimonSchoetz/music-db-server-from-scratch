const createError = require("http-errors");
const Music = require("../models/musicSchema");

exports.getOrders = async (req, res, next) => {
    try {
        const music = await Music.find()
        res.json({ success: true, music: music });
    }
    catch (err) {
        next(err)
    }
};

exports.getOrderById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const music = await Music.findById(id);
        if (!music) throw createError(404);
        res.json({ success: true, music: music });
    }
    catch (err) {
        next(err)
    }
};

exports.postOrders = async (req, res, next) => {
    try {
        const music = new Music.findByIdAndUpdate
        await music.save()
        console.log("New music has been added")
        res.json({ success: true, music: music });
    }
    catch (err) {
        next(err)
    }
};
exports.putOrders = async (req, res, next) => {
    const { id } = req.params;
    const music = req.body;
    try {
        const updateMusic = await Music.findByIdAndUpdate(id, music, { new: true }); // true, to show the new music in the update message
        if (!updateMusic) throw createError(500);
        res.json({ success: true, music: updateMusic });
    }
    catch (err) {
        next(err)
    }
    res.json({ success: true, music: music });
};
exports.deleteOrders = async (req, res, next) => {
    const { id } = req.params;
    try {
        const music = await Music.findByIdAndDelete(id);
        if (!music) throw createError(404)
        res.json({ success: true, music: music })
    }
    catch (err) {
        next(err)
    }
};