const express= require('express');

const app = express();


app.get("/",(req,res)=>{

    res.send("hello world!!!! welcome to cybage     ...");
});

///route params

app.get("/product/:product",(req,res)=>{
res.send("exploring ...."+req.params.product);

});

app.listen(8010,()=>{

console.log("listening");

});