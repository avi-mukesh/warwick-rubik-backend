const express = require("express")
const router = express.Router()
const path = require("path")

// matches these strings: "/", "/index", "/index.html"
router.get("^/$|/index(.html)?", (req, res) => {
    console.log("hello world")
    // res.sendFile(path.join(__dirname, "..", "views", "index.html"))
    res.send("Hello world")
})

module.exports = router
