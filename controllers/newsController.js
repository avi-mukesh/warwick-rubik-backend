const News = require("../models/News")
const asyncHandler = require("express-async-handler")

// @desc Get all news
// @route GET /news
// @access Private
const getAllNews = asyncHandler(async (req, res) => {
    const news = await News.find().lean()
    if (!news?.length) return res.status(400).json({ message: "No news found" })

    res.json(news)
})

// @desc Create new news
// @route POST /news
// @access Private
const createNewNews = asyncHandler(async (req, res) => {
    const { title, text } = req.body
    if (!date || !title || !text)
        return res.status(400).json({ message: "All fields are required" })

    // create and store the new note
    const news = await News.create({ title, text })

    if (news) return res.status(201).json({ message: "New news created" })

    res.status(400).json({ message: "Invalid news data received" })
})

module.exports = { getAllNews, createNewNews }
