const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    //this is the blueprint for how the input should look like an give an error if not
    {
        item: { type: String, required: true },
        quantity: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        orderedBy: { type: String, required: true },
    }
);

module.exports = mongoose.model("User", UserSchema);