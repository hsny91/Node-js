let http =require('http') //http modul(reuseable)
let log=require('./log.js') // import module


http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type':'text/html'}); //http headers
    response.end('Merhaba');
}).listen(8080) //Port number

log.information('server run');


// node intro.js ====>> run server
// http://localhost:8080 response  "Merhaba"