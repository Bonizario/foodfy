const Recipe = require('../models/Recipe');

module.exports = {
  index(req, res) {
    const recipes = Recipe.all();

    return res.render('recipes/index', { recipes });
  },
  show(req, res) {
    const recipe = Recipe.find(req.params.id);

    if (!recipe) return res.render('Receita não encontrada');

    return res.render('recipes/show', { recipe });
  },
};
