const url = require('url');		
const urlString = 'https://www.example.com:8080/path/to/file?query1=value1&query2=value2#hash';		
const parsedUrl = url.parse(urlString);		
console.log(parsedUrl);		