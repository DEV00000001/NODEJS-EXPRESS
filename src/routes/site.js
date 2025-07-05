const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController').default;

route.use('/search', siteController.search);

route.use('/contact', siteController.contact);

route.use('/', siteController.index);

module.exports = route;
