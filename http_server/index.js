const http = require('http');		
http.createServer((req, res) => {		
	res.writeHead(200, {'Content-Type': 'text/plain'});	
	res.end('Hello, World!');	
}).listen(3000);		

//확인은 http://localhost:3000/