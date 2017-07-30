const React = require("react")
import IngredientList from './IngredientList.jsx'
import IngredientAddForm from './IngredientAddForm.jsx'

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <IngredientList
                        ingredients={this.props.ingredients}
                    />
                    <IngredientAddForm />
                </div>
            </div>
        )
    }
}

export default Dashboard
