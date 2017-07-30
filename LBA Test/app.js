var express = require("express")
var path = require("path")

var app = express()

app.use(express.static(path.join(__dirname, "./app/dist")))

app.listen(8080, function () {
    console.log("Find the server at: http://localhost:8080/")
})
