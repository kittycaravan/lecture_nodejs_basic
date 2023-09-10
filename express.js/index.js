// const express = require('express');			
// const app = express();			
// app.get('/', (req, res) => {			
// 	res.send('Hello, World!');		
// });			
// app.listen(3000, () => {			
// 	console.log('Server started on port 3000');		
// });			

const express = require('express');
const app = express();

function handleRequest(req, res) {
  res.send('Hello, World!');
}

app.get('/', handleRequest);

app.listen(3000, function() {
  console.log('Server started on port 3000');
});