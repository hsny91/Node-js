const { listenerCount } = require("events");
const http = require("http");
// fs gives node access to this computer files system
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const homePageHTML = fs.readFileSync("node.html");
    res.write(homePageHTML);
    res.end();
  } else if ((req.url = "/node.jpg")) {
    res.writeHead(200, { "content-type": "image/jpg" });
    const image = fs.readFileSync("node.jpg");
    res.write(image);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Sorry this is not the page you are looking for</h1>");
    res.end();
  }
});

server.listen(3000);
