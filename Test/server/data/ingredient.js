var mongoose = require("mongoose")

var ingredientSchema = mongoose.Schema({
    id: String,
    name: String,
    value: Number,
    quantifiable: Boolean,
})

module.exports = mongoose.model("ingredient", ingredientSchema)
