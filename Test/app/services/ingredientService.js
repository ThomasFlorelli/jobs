const $ = require("jquery")
const promise = require("es6-promise")

const url = "http://localhost:8080/api/ingredients"

module.exports = {
    addIngredient: function (ingredient) {
        const Promise = promise.Promise

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(ingredient),
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            })
        })
    },
    getIngredients: function () {
        const Promise = promise.Promise

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            })
        })
    },
    modifyIngredient: function (ingredient) {
        const Promise = promise.Promise

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: url + "/" + ingredient.id,
                data: JSON.stringify(ingredient),
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            })
        })
    }
}
