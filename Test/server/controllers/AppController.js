const ingredientController = require("./ingredientController")
const express = require ("express")

const router = express.Router()

router.get('/ingredients',
    ingredientController.getIngredients)

router.post('/ingredients',
    ingredientController.addIngredient)

router.post('/ingredients/:id',
    ingredientController.modifyIngredient)

module.exports = router
