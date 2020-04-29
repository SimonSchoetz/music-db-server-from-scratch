const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./addressSchema");

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true },
        email: { type: String, required: true, dropDups: true },
        pw: { type: String, required: true },
        address: AddressSchema
    }
);

module.exports = mongoose.model("User", UserSchema);