let http = require('http')

http.createServer((req, res) => {
    // console.log(`Request received at: ${req.url}`)
    // res.end('hello world\n')
    for(let header in req.headers){
    	res.setHeader(header,req.headers[header]);
    }
    req.pipe(res);
}).listen(8000)

console.log(" we are listening on http://127.0.0.1:8000 ")