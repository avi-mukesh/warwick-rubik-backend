const express = require("express")
const router = express.Router()
const eventsController = require("../controllers/eventsController")

router
    .route("/")
    .get(eventsController.getAllEvents)
    .post(eventsController.createNewEvent)
// .patch(eventsController.updateNote)
// .delete(eventsController.deleteNote)

module.exports = router
