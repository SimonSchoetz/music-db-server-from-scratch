const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    //this is the blueprint for how the input should look like an give an error if not
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true },
        email: { type: String, required: true },
        pw: { type: String, required: true },
    }
);

module.exports = mongoose.model("User", UserSchema);