const Event = require("../models/Event")
const asyncHandler = require("express-async-handler")

// @desc Get all events
// @route GET /events
// @access Private
const getAllEvents = asyncHandler(async (req, res) => {
    console.log("getting request")
    const events = await Event.find().lean()
    console.log(events)
    if (!events?.length)
        return res.status(400).json({ message: "No events found" })

    res.json(events)
})

// @desc Create new event
// @route POST /events
// @access Private
const createNewEvent = asyncHandler(async (req, res) => {
    const { date, title, text } = req.body
    if (!date || !title || !text)
        return res.status(400).json({ message: "All fields are required" })

    // create and store the new note
    const event = await Event.create({ date, title, text })

    if (event) return res.status(201).json({ message: "New event created" })

    res.status(400).json({ message: "Invalid event data received" })
})

module.exports = { getAllEvents, createNewEvent }
