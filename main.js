let http = require("http");//import http

http.createServer(function(request, response){
    response.writeHead(200,{
        "content-type": "text/plain"
    });
    response.end("Hello world!\n");
}).listen(8081);

console.log("Server running on PORT 8081");