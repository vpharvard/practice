const express = require('express');
const app = express();
const hb = require('handlebars');
const getPage = require('../models/index');

app.use('/static', express.static('public'));

app.get('/', (req, res, next) => {
  res.send(getPage());
});

module.exports = app;