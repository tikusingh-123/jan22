var express= require('express');
var app = express();


let products =[
{pid:1,pname:"p1",price:12},
{pid:2,pname:"p2",price:13},
{pid:3,pname:"p3",price:14}
]



app.get('/product/:id',function (req,res){
let product = products.find( function(p)
 {return p.pid==req.params.id;}
 );
 res.send(product);

 });




app.post("/product",(req,res)=>{

    products.push({pid:4,pname:'p4',price:15});
    res.send(products)
})

app.listen(8010 ,function(){

    console.log("listening")
});