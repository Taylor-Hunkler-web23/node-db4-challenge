const db = require('../data/seeds/db-config.js')


module.exports ={
   getRecipes,
   getShoppingList,
   getInstructions
}



function getRecipes () {
    return db("recipes")
    .select("recipes.name")
   
}

function getInstructions (id) {
    return db("recipes")
    .select("recipes.name", "recipes.instructions")
    .where( "recipes.id", "=", id)
}
// function getRecipes () {
//     return db("recipes").select('name', 'instructions')
// }

function getShoppingList(id){
return db("recipe_ingredients")
// .select("recipes.name", "recipes.name", "ingredients.name", "recipe_ingredients.quantity")
.select({recipe_name: 'recipes.name', ingredient_to_buy: "ingredients.name", number_to_buy: "quantity"})

.join("recipes", "recipe_ingredients.recipe_id", "=", "recipes.id")
.join ("ingredients",  "recipe_ingredients.ingredient_id", "=", "ingredients.id")
.where( "recipe_ingredients.recipe_id", "=", id)
// .where("recipe_ingredients.recipe_id", '=', id)
}

    
// select recipes.name, ingredients.name, recipe_ingredients.quantity, * from recipe_ingredients
// join Recipes on recipe_ingredients.recipe_id = recipes.id
// join ingredients on recipe_ingredients.ingredient_id = ingredients.id;