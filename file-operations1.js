// var  fs=require("fs");


// fs.open('myfile.txt', 'r+',function(err,fd){


//     if(err){

//         return console.error(err);
//     }
//         console.log("file opened successfully!");
//     });


// var fs= require("fs");

// fs.writeFile('myfile.txt',"writing sample dat to file", function (err){

//     if (err) throw err;
// console.log('written');

// });



// var fs = require('fs');

// fs.appendFile('myfile.txt', 'updated file', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


var fs= require("fs");

var buffer= new Buffer(1024);

fs.open('myfile.txt','r+', function(err,fd){

    if(err) return console.error(err);


fs.read(fd, buffer, 0, buffer.lentgh , 0, function(err, bytes){


    if(err)  console.log(err);
 
    console.log(bytes + "bytes read");

     
    if(bytes > 0)
    {
      

        console.log(buffer.slice(0, bytes).toString());

    }
    fs.close(fd, function(err){

        if(err){

            console.log(err);

        }
        console.log("file closed");
    });

    fs.truncate(fd, function(err){


        if(err){

            console.log(err)
        }
        console.log("truncated");

    }
    );
});

});