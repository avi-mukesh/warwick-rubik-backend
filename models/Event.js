const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Event", eventSchema)
