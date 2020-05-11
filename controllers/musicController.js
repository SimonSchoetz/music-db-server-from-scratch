const createError = require("http-errors");
const Music = require("../models/musicSchema");

exports.getMusic = async (req, res, next) => {
    try {
        const music = await Music.find()
        console.log(req.user)
        res.json({ success: true, music: music });
    }
    catch (err) {
        next(err)
    }
};

exports.getMusicById = async (req, res, next) => {
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

exports.postMusic = async (req, res, next) => {
    try {
        console.log("from postMusic: " + req)
        const music = new Music(req.body);
        await music.save()
        res.json({ success: true, music: music });
    }
    catch (err) {
        next(err)
    }
};

exports.putMusic = async (req, res, next) => {
    const { id } = req.params;
    const music = req.body;
    try {
        const updateMusic = await Music.findByIdAndUpdate(id, music, { new: true });
        if (!updateMusic) throw createError(500);
        res.json({ success: true, music: updateMusic });
    }
    catch (err) {
        next(err)
    }
};

exports.deleteMusic = async (req, res, next) => {
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