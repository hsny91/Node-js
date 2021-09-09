let http =require('http') //http modul(reuseable)
let log=require('./log.js') // import module


http.createServer(function(request,response){
    console.log(request.url)     // /admin
    if(request.url=='/admin'){  //localhost:3000/admin
        //response.write('Admin Page')
        response.write('<html> <body> <strong>Admin Page</strong></body></html>')
    }
   else{
        //response.write('Home Page')
        response.write('<html> <body><strong>Home Page</strong></body></html>')
   }
    response.end('End Page');
}).listen(3000) //Port number

log.information('server run');