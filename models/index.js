// const hb = require('handlebars');
const template = require('../views/index');

function getPage(pageData) {
  console.log(pageData);
  return template(pageData);
}

module.exports = getPage;