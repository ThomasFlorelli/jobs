const dispatcher = require("../dispatcher")
const uuid = require("uuid/v4")
const ingredientsJson = require("../ingredients.json")
const ingredientService = require("../services/ingredientService");

function ingredientStore () {
    let listeners = []

    function onChange (listener) {
        getIngredients(listener)
        listeners.push(listener)
    }

    function getIngredients (cb) {
        ingredientService.getIngredients().then(function (res) {
            cb(res)
        })
    }

    function addIngredient (ingredient) {
        ingredientService.addIngredient(ingredient).then(function (res) {
            triggerListeners()
        })
    }

    function changeIngredientName (ingredient) {
        ingredientService.modifyIngredient(ingredient).then(function (res) {
            triggerListeners()
        })
    }

    function increaseIngredientNumber (ingredient) {
        ingredient.value++
        ingredientService.modifyIngredient(ingredient).then(function (res) {
            triggerListeners()
        })
    }

    function decreaseIngredientNumber (ingredient) {
        if (ingredient.value > 0) {
            if (ingredient.quantifiable === true) {
                ingredient.value--
            } else {
                ingredient.value -= 0.1
            }
        }
        ingredientService.modifyIngredient(ingredient).then(function (res) {
            triggerListeners()
        })
    }

    function triggerListeners () {
        getIngredients(function (res) {
            listeners.forEach(function (listener) {
                listener(res)
            })
        })
    }

    dispatcher.register(function (payload) {
        const split = payload.type.split(":")

        if (split[0] === "ingredient") {
            switch (split[1]) {
                case "addIngredient":
                    addIngredient(payload.ingredient)
                    break
                case "changeIngredientName":
                    changeIngredientName(payload.ingredient)
                    break
                case "increaseIngredientNumber":
                    increaseIngredientNumber(payload.ingredient)
                    break
                case "decreaseIngredientNumber":
                    decreaseIngredientNumber(payload.ingredient)
                    break
            }
        }
    })

    return {
        onChange: onChange,
        getIngredients: getIngredients
    }
}

module.exports = ingredientStore()
