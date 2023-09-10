const http = require('http');			
const options = {			
	hostname: 'localhost',		
	port: 3000,		
	path: '/',		
	method: 'GET'		
};			
const req = http.request(options, (res) => {			
	console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);		
	res.setEncoding('utf8');		
	res.on('data', (chunk) => {		
		console.log(`Received data: ${chunk}`);	
	});		
});			
req.on('error', (err) => {			
	console.error(`Problem with request: ${err.message}`);		
});			
req.end();			