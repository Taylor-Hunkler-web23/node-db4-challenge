const db = require('../data/seeds/db-config.js')


module.exports ={
   getRecipes
}



function getRecipes () {
    return db("recipes")
}

function getRecipes () {
    return db("recipes").select('name', 'instructions')
}