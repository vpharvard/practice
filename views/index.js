const hb = require('handlebars');

const mortgagePage = `
  <!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Acme Bank</title>
  </head>
  <body>
    Thank you for visiting Acme Bank. Click <a href="/about">here</a> to learn more!<br><br>
    
    {{#form}}
      {{> mortgageForm}}
      <br><br>
    {{/form}}

    {{#results}}
      {{> mortgageResults}}
      <br><br>
    {{/results}}

    {{#about}}
      Acme Bank is a new bank in the Boston area.
    {{/about}}

  </body>
  </html>
`;

const mortgageForm = `
  <p>Use the form below to learn what your monthly mortgage payments can be.</p>
  <form action="/">
  Loan Amount<br>
  <input type="text" name="loanAmount"><br>
  Interest Rate<br>
  <input type="text" name="interestRate"><br>
  Length of Loan in Years<br>
  <input type="text" name="period"><br><br>
  <input type="submit" value="Submit">
  </form>
`;

const mortgageResults = `
  <p>The results of the mortgage details you entered are:</p>
  $ {{payment}}
`;
const template = hb.compile(mortgagePage);
hb.registerPartial('mortgageForm', mortgageForm);
hb.registerPartial('mortgageResults', mortgageResults);

module.exports = template;