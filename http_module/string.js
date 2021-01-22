var http = require('http');

var fs = require('fs');

const url = require('url');

let port =1060;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  readline.question('please enter the String', function(string1)
  {
console.log(`searching string ${string1}`);
readline.close

fs.readFile("index1.txt",{encoding:'utf-8'},function (err,data){

    if(err) throw error;

    var arr =data.split(' ');
    const searchkeyword =string1;
    let lastindex = 0 ;
     console.log(arr);

    for(let index =0 ; index<arr.length; index++){
    if(arr[index].includes(searchkeyword)){
        lastindex = index;

        console.log("string"+searchkeyword+ "found in txt file");
        console.log(arr[lastindex]);

        const server=http.createServer((req,res)=>{
            res.writeHead(200,{'Context-type':'text/html'});
            
            let data="string is " +arr[lastindex];
            res.write("<h1>"+"the string is "+data+"</h1>");
            res.end();
            
            }).listen(port);
            
            server.on('listening',()=>{
            
                console.log("listening :"+port+"...")
            });
              
        break;
       
    }
     
}

  });




  });

 




