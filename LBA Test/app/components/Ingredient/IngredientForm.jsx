const React = require("react")
import actions from '../../actions/ingredientListActions.js'

class IngredientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            name: this.props.name
        }
    }

    handleNameChange (e) {
        e.preventDefault()
        this.setState({name: e.target.value})
    }

    changeName (e) {
        e.preventDefault()
        actions.changeName(this.state)
        this.props.onFormClose()
    }

    render () {
        return (
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                </div>
                <div>
                    <button onClick={this.changeName.bind(this)}>Edit name</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}

export default IngredientForm
