const express = require('express');
const route = express.Router();

const newController = require('../app/controllers/NewsController').default
  .default;

route.use('/:slug', newController.detail);
route.use('/', newController.index);

module.exports = route;
