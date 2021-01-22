var express= require('express');
var app = express();


app.route("/user").get((req,res)=>{

    res.send('user -get')
})

app.route("/user").post((req,res)=>{
    res.send('user-post')
})

app.get('/',function (req,res){
    res.send('hello-get');
})

app.post('/',function (req,res){
    res.send('hello-post');
})


app.delete('/del_user',function(req,res){

res.send('hello delete');
})


app.get('/list_user',function(req,res){
 res.send('page handling');
})


app.get('/ball+bat', function (req, res) {
    res.send('batball')
  })

app.get('/aa*bb', function (req, res) {
    res.send('combination')
  })
  
app.listen(3050, function(){

    console.log("listening..")
})

