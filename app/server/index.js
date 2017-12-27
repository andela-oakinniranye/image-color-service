var app = require('express')();

app.START_TIME = +new Date();

const routes = require('./routes.js');
app.use('/colors', routes)

module.exports = app
