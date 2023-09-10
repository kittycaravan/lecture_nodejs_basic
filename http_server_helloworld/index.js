const http = require('http')							
							
const server = http.createServer((req, res) => {							
	res.statusCode = 200						
	res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // 문자셋을 UTF-8로 설정. (한글 안깨지게..)
	res.end('헬로월드 !\n')						
})							
							
server.listen(3000, () => {							
	console.log('Server running at http://localhost:3000/')						
})							