const db = require("../models/db");

exports.getContactById = (req, res, next) => {
    res.send("getContactById request am been")
};

exports.getContacts = (req, res, next) => {
    res.send("getContacts request am been")
};

exports.postContacts = (req, res, next) => {
    res.send("postContacts request am been")
};
exports.putContacts = (req, res, next) => {
    res.send("putContacts request am been")
};
exports.deleteContacts = (req, res, next) => {
    res.send("deleteContacts request am been")
};