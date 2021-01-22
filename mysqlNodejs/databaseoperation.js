const mysql =require ('mysql');

var  myConnection = mysql.createConnection({
host:'localhost',
user :'root',
password:'password',
database: 'hemant'


 });


 myConnection.connect(function(err){
   if(err) throw err;
   console.log("connected successfully!!!");

 });


 //select query

 myConnection.query('select * from pet',function(err,rows,cols){
     if(err) throw err;
     console.log("pets : ",rows[0])
 })


 //insert records
 myConnection.query('insert into shop values(103,"newshop1")',function(err,result){
    if(err) throw err;
    console.log("row created : ",result);
})


//delete records
myConnection.query('delete from  shop where shopid=102',function(err,result){
    if(err) throw err;
    console.log("row created : ",result);
})