
const{ myname} = require("./mymodules");

var mydate= require("./mymodules");

var message="hello world!!!"


//var datecur= mydate();



mydate.showdate=()=>{


    return "new date : 14 jan 2021";

}


setInterval(()=>{ var n=2;
    
    console.log("time interval "+2)},2000)


var rollno = ["1", "2", "3"];

console.log(mydate.showdate());

console.log("message:",message,"roll_no",rollno[1],myname());


module.exports={mydate}


