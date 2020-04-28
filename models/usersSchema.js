const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true },
        email: { type: String, required: true, dropDups: true },
        pw: { type: String, required: true },
    }
);

module.exports = mongoose.model("User", UserSchema);