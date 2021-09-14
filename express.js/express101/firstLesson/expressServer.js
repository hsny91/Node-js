// sudo npm i -g nodemon
// http is native to Node.js we just have to ask for it
const { listenerCount } = require("events");
const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req)
  //writeHead taken 2 argumnet 
  // 1. status kode
  // 2. object for the mine-type
  res.writeHead(200,{'content-type':'text/html'})
  res.write('<h1>Hello World !</h1>')
  res.end(); // if we dont write this, the responese never stops
});

server.listen(3000);

// http message
// 1. start-line 
// 2. header
// 3. body

// curl -v localhost:3000(curl= client URL) is a tool to transfer data from or to a server. 