const querystring = require('querystring');
const queryString = 'name=cat&age=5';
const parsedQuery = querystring.parse(queryString);
console.log(parsedQuery);