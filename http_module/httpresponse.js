const http = require ('http');
const url = require('url');
let port =8060;
debugger;
const server=http.createServer((req,res)=>{
res.writeHead(200,{'Context-type':'text/html'});
const query= url.parse(req.url,true).query;
let data="hello " +query.name;
res.write("<h1>"+data+"</h1>");
res.end();
debugger;


}).listen(port);

server.on('listening',()=>{

    console.log("listening :"+port+"...")
});