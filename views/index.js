const hb = require('handlebars');

const Page = `
  <!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Nested Components</title>
    <link rel="stylesheet" href="/static/styles.css">
  </head>
  <body>
    {{> component1}}
  </body>
  </html>
`;

const component1 = `
<div class="component1">
  {{> component2}}
</div>

`;

const component2 = `
  <div class="component2">Nested Component</div>
`;
const template = hb.compile(Page);
hb.registerPartial('component1', component1);
hb.registerPartial('component2', component2);

module.exports = template;