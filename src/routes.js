const express = require('express');
const routes = express.Router();
const HomeController = require('./app/controllers/HomeController');
const RecipeController = require('./app/controllers/RecipeController');

/* === HOME === */
routes.get('/', HomeController.index);
routes.get('/sobre', HomeController.about);

/* === RECEIPES === */
routes.get('/receitas', RecipeController.index);
routes.get('/receitas/:id', RecipeController.show);

/* === ALIAS === */
routes.get('/home', (req, res) => {
  return res.redirect('/')
});

module.exports = routes;
