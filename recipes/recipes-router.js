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


  router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });
module.exports = router;