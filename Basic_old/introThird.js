let http = require("http"); //http modul(reuseable)
let log = require("./log.js"); // import module

http
  .createServer(function (request, response) {
    console.log(request.url); // /admin
    if (request.url == "/admin") {
      //localhost:3000/admin
      //response.write('Admin Page')
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html> <body> <strong>Admin Page</strong></body></html>");
    } else if (request.url == "/") {
      //response.write('Home Page')
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html> <body><strong>Home Page</strong></body></html>");
    } else if (request.url == "/customer") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(
        JSON.stringify({
          name: "engin",
          lastName: "demirog",
        })
      );
    }
    response.end();
  })
  .listen(3002); //Port number

log.information("server run");
