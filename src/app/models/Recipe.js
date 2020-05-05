const data = require('../../data');

module.exports = {
  all() {
    return data;
  },
  find(id) {
    const foundRecipe = data.find(recipe => recipe.id === id);

    return foundRecipe;
  },
};
