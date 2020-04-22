const db = require("../models/db");

exports.getMusic = (req, res, next) => {
    let music = db.get("music").value();
    res.json({ success: true, music: music });
};

exports.getMusicById = (req, res, next) => {
    const { id } = req.params;
    let music = db.get("music").find({ id });
    res.json({ success: true, music: music });
};

exports.postMusic = (req, res, next) => {
    db.get("music").push(req.body).last().assign({ id: new Date().toString() }).write();
    res.json({ success: true, music: req.body });
};
exports.putMusic = (req, res, next) => {
    const { id } = req.params;
    const music = req.body;
    db.get("music").find({ id }).assign(music).write();
    res.json({ success: true, music: music });
};
exports.deleteMusic = (req, res, next) => {
    const { id } = req.params;
    let music = db.get("music").remove({ id }).write();
    res.json({ success: true, music: music });
};