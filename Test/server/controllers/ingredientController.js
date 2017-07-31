const mongoose = require("mongoose")
const _ = require("underscore")
const Ingredient = require("../data/ingredient.js")

module.exports.getIngredients = function (req, res, next) {
    Ingredient.find(null, function (err, ingredients) {
        if (err) {
            res.send(err)
        } else {
            res.json(ingredients)
        }
    })
}

module.exports.addIngredient = function (req, res, next) {
    const ingredient = new Ingredient(_.extend({}, req.body))

    ingredient.save(function (err) {
        if (err) {
            res.send(err)
        } else {
            res.json(ingredient)
        }
    })
}

module.exports.modifyIngredient = function (req, res, next) {
    const id = req.params.id

    if (typeof req.body.value != "undefined") {
        var value = {value: req.body.value}
    } else if (typeof req.body.name != "undefined") {
        var value = {name: req.body.name}
    }
    Ingredient.update({_id: id}, {$set: value}, function (err, ingredient) {
        if (err) {
            res.send(err)
        } else {
            res.json(ingredient)
        }
    })
}
