// const hb = require('handlebars');
const template = require('../views/index');

function getPage() {
  console.log();
  return template();
}

module.exports = getPage;