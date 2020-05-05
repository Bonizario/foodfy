const Recipe = require('../models/Recipe');

module.exports = {
  index(req, res) {
    const recipes = Recipe.all();

    return res.render('home/index', { recipes });
  },
  about(req, res) {
    return res.render('home/about');
  },
};
