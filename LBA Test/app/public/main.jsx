const React = require("react")
const ReactDOM = require("react-dom")
import Dashboard from '../components/Ingredient/Dashboard.jsx'
import ingredientStore from '../stores/ingredientStore.js'

let _ingredients = ingredientStore.getIngredients()

ingredientStore.onChange(function (ingredients) {
    _ingredients = ingredients
    render()
})

function render () {
    ReactDOM.render(<Dashboard ingredients={_ingredients} />, document.getElementById("ingredientsContainer"))
}

render()
