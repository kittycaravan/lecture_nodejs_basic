const express = require('express'); // express 모듈 가져오기		
const app = express(); // express() 함수는 Express 애플리케이션 객체를 생성하는 생성자 함수.		
		
app.get('/cat', (req, res) => {		
	res.send('Hello Cat World! ');	
});		
		
// 미들웨어의 선언 순서는 요청 처리에 직접적으로 영향을 미치기 때문에,		
// 미들웨어의 역할에 따라 적절한 위치에 추가하는 것이 중요합니다.		
app.use((req, res, next) => { // 참고로 이 미들웨어 선언은 app.get 들 보다 위에 있어야 그 경로로 진입했을 때 작동함.		
	console.log("미드 오픈");	
	console.log(`${req.method} ${req.url}`);	
	next();	
});		
app.get('/dog', (req, res) => {		
	res.send('Hello Dog World!');	
});		
		
app.listen(3000, () => {		
	console.log('Server listening on port 3000');	
});		