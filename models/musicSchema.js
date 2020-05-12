const mongoose = require("mongoose");
const { Schema } = mongoose;

const MusicSchema = new Schema(
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        album: { type: String, default: "N/A" },
        label: { type: String, default: "Self-Release", required: true },
        release: { type: Date, default: Date.now, required: true },
        link: { type: String, required: true },
        img: { type: String, default: "N/A" }
    }
);
console.log("After Music Schema")
module.exports = mongoose.model("Music", MusicSchema);