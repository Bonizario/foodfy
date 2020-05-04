const data = require('../../data');

module.exports = {
  index(req,res) {

    return res.render('recipes/index');
  },
  show(req, res) {
    const recipeId = req.params.id;
    const foundRecipe = data.find(recipe => recipe.id === recipeId);

    return res.render('recipes/show', { recipe: foundRecipe });
  },
};
