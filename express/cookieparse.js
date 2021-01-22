var express= require('express');

var cookieParser = require('cookie-parser');

var app =express();
app.use(cookieParser());

//setter of cookie

app.get('/cookieset', function(req,res){

    res.clearCookie()
    res.cookie('company','cyabge');
    res.cookie('name','john');
    res.cookie("hemant","singh");
    res.status(200).send('cookie is set all set');

});
//getter of cookie
app.get('/cookie',function(req,res){
   res.status(200).send(req.cookies ); 
});
app.listen(8000, function(){
console.log('app is listening');
});