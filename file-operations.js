const file =require ('fs');

file.readFile('myfile.txt',(err,fdata)=>{

    if(err) throw err;

    console.log("reading from the myfile.txt:",fdata.toString());


})


let fileRead=file.readFileSync('myfile.txt')

console.log(file.toString());

