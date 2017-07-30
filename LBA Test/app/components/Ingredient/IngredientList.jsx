const React = require("react")
import EditableIngredient from './EditableIngredient.jsx'

class IngredientList extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.ingredients.map(function (i,index) {
                        return(
                            <EditableIngredient
                                key={i.id}
                                id={i.id}
                                name={i.name}
                                quantifiable={i.quantifiable}
                                value={i.value}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default IngredientList
