
exports.up = function(knex) {
  return knex.schema
  //ingredients
.createTable ("ingredients", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
})
//recipe
.createTable ("recipes", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();

    tbl.string("instructions", 255).notNullable();
})
//instructions
// .createTable ("instructions", tbl => {
//     tbl.increments();

//     tbl.integer("recipe_id")
//     .unsigned()
//     .references("id")
//     .inTable("recipes")
//     .onDelete("RESTRICT")
//     .onUpdate("CASCADE")

//     tbl.integer("step").notNullable()

//     tbl.string("instruction").notNullable()
// })
//recipe ingredients
.createTable ("recipe_ingredients", tbl => {
    tbl.increments();

    tbl.integer("recipe_id")
    .unsigned()
    .references("id")
    .inTable("recipes")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")

    tbl.integer("ingredient_id")
    .unsigned()
    .references("id")
    .inTable("ingredients")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")

    tbl.float("quanity").notNullable()
   
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
  .dropTableIfExists('recipe_ingredients')
};
