const React = require("react")
import IngredientForm from './IngredientForm.jsx'
import actions from '../../actions/ingredientListActions.js'

class IngredientAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            value: "",
            quantifiable: true
        }
    }

    addIngredient (e) {
        e.preventDefault()
        actions.addIngredient(this.state)
    }

    handleInputChange (e) {
        e.preventDefault()
        const name = e.target.name
        if (e.target.value < 0) {
            const value = 0
        } else {
            const value = e.target.value
        }
        this.setState({[name]: value})
    }

    render () {
        return (
            <form onSubmit={this.addIngredient.bind(this)}>
                  <div>
                      <label htmlFor="name">School Name:</label>
                      <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} placeholder="Ingredient name" />
                  </div>
                  <div>
                      <label htmlFor="number">Number:</label>
                      <input type="number" id="number" name="value" value={this.state.value} onChange={this.handleInputChange.bind(this)} placeholder="Ingredient number" />
                  </div>
                  <div>
                      <button type="submit">Add Ingredient</button>
                  </div>
            </form>
        )
    }
}

export default IngredientAddForm
