const Router = require('express').Router();

const { ENDPOINTS } = require('../config/constants/ENDPOINTS.js');
const ColorController = require('./controllers/ColorController');
const BaseController = require('./controllers/BaseController');

Router.get(ENDPOINTS.base, BaseController);
Router.get(ENDPOINTS.getColor, ColorController);

module.exports = Router;
