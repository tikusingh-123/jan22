const express= require('express');
const app = express();


app.get("/",(req,res)=>{

    res.send("hellow world!!!");

}).listen(1080);