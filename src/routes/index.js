const express = require('express');
const routes = express.Router();
const HomeController = require('../app/controllers/HomeController');
const admin = require('./admin');

routes.use('/admin', admin);

routes.get('/', HomeController.index);
routes.get('/sobre', HomeController.about);


/* === ALIAS === */
routes.get('/home', (req, res) => {
  return res.redirect('/')
});

module.exports = routes;
