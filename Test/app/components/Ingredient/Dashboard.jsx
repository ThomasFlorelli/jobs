const React = require("react")
import IngredientList from './IngredientList.jsx'
import IngredientAddForm from './IngredientAddForm.jsx'

class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <div className="content">
                    <IngredientAddForm />
                    <IngredientList
                        ingredients={this.props.ingredients}
                    />
                </div>
            </div>
        )
    }
}

export default Dashboard
