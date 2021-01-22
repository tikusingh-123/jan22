const http= require('http');
const fs =require('fs');

const port=8070;

const server =http.createServer((req,res)=>{
fs.readFile('index.html',(err,data)=>{
    if(err)
    throw new Error();
    else{
        res.writeHead(200, {'Context-type':'text/html'});
    }
    res.end();
})

}).listen(port);

server.on('listening',()=>{

    console.log('listening...',port)
});