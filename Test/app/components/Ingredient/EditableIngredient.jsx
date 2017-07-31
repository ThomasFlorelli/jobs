const React = require("react")
import IngredientForm from './IngredientForm.jsx'
import Ingredient from './Ingredient.jsx'

class EditableIngredient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editFormOpen: false
        }
    }

    handleEditClick (e) {
        e.preventDefault()

        this.setState({editFormOpen: true})
    }

    handleFormClose () {
        this.setState({editFormOpen: false})
    }

    render () {
        if (this.state.editFormOpen) {
            return (
                <IngredientForm
                    id={this.props.id}
                    name={this.props.name}
                    onFormClose={this.handleFormClose.bind(this)}
                />
            )
        } else {
            return (
                <Ingredient
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    quantifiable={this.props.quantifiable}
                    onEditClick={this.handleEditClick.bind(this)}
                />
            )
        }
    }
}

export default EditableIngredient
