const mongoose = require("mongoose");
const { Schema } = mongoose;

const MusicSchema = new Schema(
    //this is the blueprint for how the input should look like an give an error if not
    {
        title: { type: String, required: true },
        artist: { type: String, required: true },
        label: { type: String, required: true },
        release: { type: Date, default: Date.now }
    }
);

module.exports = mongoose.model("Music", MusicSchema);