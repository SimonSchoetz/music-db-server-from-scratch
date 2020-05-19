const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema(
    {
        item: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Music",
            required: true
        }],
        quantity: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        orderedBy: { type: String, required: true },
    }
);

module.exports = mongoose.model("Orders", OrdersSchema);