require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const mongoose = require("mongoose")
const PORT = process.env.port || 5000

console.log(process.env.NODE_ENV)

connectDB()

app.use(cors(corsOptions))
app.use(express.json())

// app.use("/", express.static(path.join(__dirname, "public")))
app.use("/", require("./routes/root"))
app.use("/events", require("./routes/eventRoutes"))

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on("error", () => {
    console.log(err)
    logEvents(
        `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
        "mongoErrLog.log"
    )
})
