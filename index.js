let http = require('http');
let request = require('request');
let fs = require('fs');
let through = require('through');
let colors = require('colors/safe');
let argv = require('yargs')
           .default('host','127.0.0.1')
           .argv

let scheme = 'http://';
let port =argv.port || argv.host === '127.0.0.1'? 8000:80;
let destinationUrl = argv.url || scheme + argv.host + ':' + port;
let logStream = argv.mylog ? fs.createWriteStream(argv.mylog): process.stdout;
console.log(argv);

http.createServer((req, res) => {

    logStream.write(colors.red("\n Echo Request:" + JSON.stringify(req.headers)));

    for(let header in req.headers){
    	res.setHeader(header,req.headers[header])
    }
    
    through(req,logStream,{autoDestroy:false})
    req.pipe(res);
}).listen(8000)

logStream.write(colors.white(" we are listening on http://127.0.0.1:8000 "));

http.createServer((req, res) => {
	let url = destinationUrl
	if(req.headers['x-destination-url']){
		url = req.headers['x-destination-url']
	}
   let options ={
   	headers:req.headers,
   	url:url + req.url
   }
   logStream.write(colors.green("\n proxy request" + JSON.stringify(req.headers)));
   through(req,logStream,{autoDestroy:false})

  let destinationResponse = req.pipe(request(options))
  destinationResponse.pipe(res)
   through(destinationResponse,logStream,{autoDestroy:false})
}).listen(8001)