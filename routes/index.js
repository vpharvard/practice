const express = require('express');
const app = express();
const hb = require('handlebars');
const getPage = require('../models/index');

app.get('/', (req, res, next) => {
  var pageData;
  if (req && req.query) {
    const loanAmount = (req.query.loanAmount);
    const interestRate = (req.query.interestRate);
    const period = (req.query.period);
    if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(period)) {
      const monthlyRate = interestRate / 100 / 12;
      const months = period * 12;
      var payment = loanAmount * monthlyRate * (Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      payment = Math.round(payment * 100) / 100;
      pageData = {
        payment: payment,
        results: true,
        form: true
      };
    }
    else {
      pageData = {
        form: true
      };
    }
  }

console.log(pageData);
  res.send(getPage(pageData));
});

app.get('/about', (req, res, next) => {
  pageData = {
    about: true
  }
  res.send(getPage(pageData));
});

module.exports = app;

// Morgage Formula for reference
// P = L[c(1 + c)^n]/[(1 + c)^n - 1]
// var payment = loanAmount * ((monthlyRate * (1 + monthlyRate) ^ months) / ((1 + monthlyRate) ^ months - 1));

