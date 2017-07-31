const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const AppController = require("./server/controllers/AppController")

const app = express()

app.use(express.static(path.join(__dirname, "./app/dist")))
app.use(bodyParser.json())
app.use("/api", AppController)

app.listen(8080, function () {
    console.log("Find the server at: http://localhost:8080/")
})

mongoose.connect("mongodb://localhost/LBA")
