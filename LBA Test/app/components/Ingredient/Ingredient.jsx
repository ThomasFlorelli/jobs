const React = require("react")
import actions from '../../actions/ingredientListActions.js'

class Ingredient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            name: this.props.name,
            value: this.props.value
        }
    }

    increaseNumber (e) {
        e.preventDefault()
        actions.increaseNumber(this.state)
    }

    decreaseNumber (e) {
        e.preventDefault()
        actions.decreaseNumber(this.state)
    }

    render () {
        return (
            <div>
                <div>
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.quantifiable == true ? this.props.value : `You have enough left to make ${Math.trunc(this.props.value * 10)} recipes`}
                    </div>
                </div>
                <div>
                    <button onClick={this.props.onEditClick}>Edit</button>
                    <button onClick={this.increaseNumber.bind(this)}>+</button>
                    <button onClick={this.decreaseNumber.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

export default Ingredient
