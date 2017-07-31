var pool = "localhost:27017"
var db = "LBA"
var ingredientsList = {
  "onions": 4,
  "beefsteak": 1,
  "garlic": 3,
  "red pepper": 5,
  "thyme": 1,
  "slice of bread": 8,
  "emmental": 1,
  "mozzarella": 1,
  "lettuce": 2,
  "tomatoes": 3,
  "eggs": 2,
  "chocolate": 2,
  "flour": true,
  "brown sugar": true,
  "vinegar": true,
  "white vinegar": true,
  "olive oil": true,
  "paprika": true,
  "butter": true
}

var mongo = new Mongo(pool)
var conn = mongo.getDB(db)

function fill_ingredients () {
    for (var key in ingredientsList) {
        if (ingredientsList[key] === true || ingredientsList[key] === false) {
            conn.ingredients.save({name: key, value: ingredientsList[key] == true ? 1 : 0, quantifiable: false})
        } else {
            conn.ingredients.save({name: key, value: ingredientsList[key], quantifiable: true})
        }
    }
    print("Number of ingredients add: " + Object.keys(ingredientsList).length)
}

fill_ingredients()
