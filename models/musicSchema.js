const mongoose = require("mongoose");
const { Schema } = mongoose;

const MusicSchema = new Schema(
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        label: { type: String, required: true },
        release: { type: Date, default: Date.now },
        link: { type: String, required: true },
        img: { type: String }
    }
);

module.exports = mongoose.model("Music", MusicSchema);