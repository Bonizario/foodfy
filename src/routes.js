const express = require('express');
const routes = express.Router();
const RecipeController = require('./app/controllers/RecipeController');

/* === HOME === */
routes.get('/', (req, res) => {
  return res.render('home/index');
});

/* === ABOUT === */
routes.get('/sobre', (req, res) => {
  return res.render('home/sobre');
});

/* === RECEIPES === */
routes.get('/receitas', RecipeController.index);

routes.get('/receitas/:id', RecipeController.show);

/* === ALIAS === */
routes.get('/home', (req, res) => {
  return res.redirect('/')
});

module.exports = routes;
