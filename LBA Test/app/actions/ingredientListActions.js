const dispatcher = require("../dispatcher")

function addIngredient (ingredient) {
    dispatcher.dispatch({
        ingredient: ingredient,
        type: "ingredient:addIngredient"
    })
}

function changeIngredientName (ingredient) {
    dispatcher.dispatch({
        ingredient: ingredient,
        type: "ingredient:changeIngredientName"
    })
}

function increaseIngredientNumber (ingredient) {
    dispatcher.dispatch({
        ingredient: ingredient,
        type: "ingredient:increaseIngredientNumber"
    })
}

function decreaseIngredientNumber (ingredient) {
    dispatcher.dispatch({
        ingredient: ingredient,
        type: "ingredient:decreaseIngredientNumber"
    })
}

module.exports = {
    addIngredient: addIngredient,
    changeName: changeIngredientName,
    increaseNumber: increaseIngredientNumber,
    decreaseNumber: decreaseIngredientNumber
}
