const express = require('express');
const routes = express.Router();

/* === USER === */
routes.get('/', (req, res) => {
  return res.render('user/index');
});

module.exports = routes;
