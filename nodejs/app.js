const http = require('http');

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello, Docker!\n This is NodeJs');
});

const port = 3000;
server.listen(port, () => {
	  console.log(`Server running on port ${port}`);
});
