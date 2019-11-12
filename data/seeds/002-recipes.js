
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Peanut Butter and Jelly Sandwich', instructions: 'Spread peanut butter and jelly onto bread and combine bread together'},
        {name: 'Egg Sandwich', instructions: 'Put eggs between 2 pieces of bread'}
      ]);
    });
};
