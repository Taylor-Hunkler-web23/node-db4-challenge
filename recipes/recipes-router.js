const express = require('express');

const recipes = require('./recipes-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });


  router.get('/:id/shoppingList', (req, res) => {
      const {id} =req.params;

    recipes.getShoppingList(id)
    .then(shoppingList => {
      res.json(shoppingList);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const {id} =req.params;

  recipes.getInstructions(id)
  .then(instructions => {
    res.json(instructions);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe' });
  });
});

//   router.get('/:id/shoppingList', (req, res) => {
//     const { id } = req.params;
  
//     recipes.getShoppingList(id)
//     .then(steps => {
//       if (steps.length) {
//         res.json(steps);
//       } else {
//         res.status(404).json({ message: 'Could not find steps for given scheme' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get steps' });
//     });
//   });
module.exports = router;