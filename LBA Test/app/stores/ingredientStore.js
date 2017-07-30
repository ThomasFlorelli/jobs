const dispatcher = require("../dispatcher")
const uuid = require("uuid/v4")
const ingredientsJson = require("../ingredients.json")

function ingredientStore () {
    let listeners = []
    let ingredients = []

    for (let key in ingredientsJson) {
        if (ingredientsJson[key] === true || ingredientsJson[key] === false) {
            ingredients.push({id: uuid(), name: key, quantifiable: false, value: ingredientsJson[key] == true ? 1 : 0})
        } else {
            ingredients.push({id: uuid(), name: key, quantifiable: true, value: ingredientsJson[key]})
        }
    }

    function getIngredients () {
        return ingredients
    }

    function onChange (listener) {
        listeners.push(listener)
    }

    function addIngredient (ingredient) {
        ingredients.push(ingredient)
        triggerListeners()
    }

    function changeIngredientName (ingredient) {
        for (let i = 0 ; i < ingredients.length ; i++) {
            if (ingredients[i].id == ingredient.id) {
                ingredients[i].name = ingredient.name
            }
        }
        triggerListeners()
    }

    function increaseIngredientNumber (ingredient) {
        for (let i = 0 ; i < ingredients.length ; i++) {
            if (ingredients[i].id == ingredient.id) {
                ingredients[i].value++
            }
        }
        triggerListeners()
    }

    function decreaseIngredientNumber (ingredient) {
        for (let i = 0 ; i < ingredients.length ; i++) {
            if (ingredients[i].id == ingredient.id  && ingredients[i].value > 0) {
                if (ingredients[i].quantifiable === true) {
                    ingredients[i].value--
                } else {
                    ingredients[i].value -= 0.1
                }
            }
        }
        triggerListeners()
    }

    function triggerListeners () {
        listeners.forEach(function (listener) {
            listener(ingredients)
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
        getIngredients: getIngredients,
        onChange: onChange
    }
}

module.exports = ingredientStore()
