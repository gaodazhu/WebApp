/**
 * Created by acer on 13-12-14.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
}).listen(3000);