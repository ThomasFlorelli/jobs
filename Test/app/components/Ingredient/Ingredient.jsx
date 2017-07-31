const React = require("react")
import actions from '../../actions/ingredientListActions.js'

class Ingredient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            name: this.props.name,
            value: this.props.value,
            quantifiable: this.props.quantifiable
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
                <div className="div-global">
                    <div className="div-name-button">
                        <div className="div-name">
                            {this.props.name}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={this.props.onEditClick}>Edit</button>
                    </div>
                    <div className="div-value">
                        {this.props.quantifiable == true ? this.props.value : `You have enough left to make ${Math.trunc(this.props.value * 10)} recipes`}
                        <button className="btn btn-secondary btn-sm" onClick={this.increaseNumber.bind(this)}>+</button>
                        <button className="btn btn-secondary btn-sm" onClick={this.decreaseNumber.bind(this)}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ingredient
