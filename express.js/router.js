const express = require('express'); //이거 써야함				
const app = express(); // Express.js 모듈을 사용하여 새로운 Express 애플리케이션을 생성하고, 생성된 애플리케이션 객체(변수app)를 반환				
				
app.get('/cat', (req, res) => {				
	// handle GET request to /users			
	console.log("야옹");			
	res.send("야옹");			
});				
				
app.listen(3000, () => {				
	console.log("서버가 실행되었습니다.");			
});				