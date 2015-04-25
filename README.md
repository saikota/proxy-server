# proxy-server- a code-path project.
A Proxy Server using IO.js

- Successfully echo requests made to the echo server?(Yes)
- Successfully proxy requests made to the proxy server?(Yes)
- Include a CLI? (Yes)
- Does app log request to stdout or save it properly to a file when the log argument is given? (Logs to a file)

## Steps to produce the below shown gif
- ### starts the proxy server:
npm start

- ### fetches from the default echo server and prints to console
 curl -v http://127.0.0.1:8001 -H 'x-foo:bar' -d "hello_world"

- ### fetches from the default echo server and logs to server.log
nodemon -x babel-node index  --mylog=./server.log
curl -v http://127.0.0.1:8001 -H 'x-foo:bar'

- ### configured to get from the custom host
bode -- index.js --host www.google.com
curl -v http://127.0.0.1:8001 -H 'x-foo:bar'

- ### fetches from http://www.google.com and logs to console.log
nodemon --exec babel-node -- index.js --url=http://www.google.com:8000 
curl -v http://127.0.0.1:8001 -H 'x-foo:bar' -d "Yello"

![alt tag](https://cloud.githubusercontent.com/assets/1555006/7331634/e873ca5e-eacc-11e4-9f81-78ef3bd10649.gif)