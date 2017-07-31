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

        actions.changeIngredientName(this.state)
        this.props.onFormClose()
    }

    render () {
        return (
            <div className="div-global">
                <div className="div-name-edit">
                    <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                </div>
                <div className="div-value">
                    <button className="btn btn-secondary btn-sm" onClick={this.changeName.bind(this)}>Edit name</button>
                    <button className="btn btn-secondary btn-sm" onClick={this.props.onFormClose}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default IngredientForm
