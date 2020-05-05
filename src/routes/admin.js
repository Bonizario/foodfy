const express = require('express');
const routes = express.Router();

const RecipeController = require('../app/controllers/RecipeController');

routes.get("/receitas", RecipeController.index);
// routes.get("/receitas/create", RecipeController.create);
routes.get("/receitas/:id", RecipeController.show);
// routes.get("/receitas/:id/edit", RecipeController.edit);

// routes.post("/receitas", RecipeController.post);
// routes.put("/receitas", RecipeController.put);
// routes.delete("/receitas", RecipeController.delete);

module.exports = routes;
