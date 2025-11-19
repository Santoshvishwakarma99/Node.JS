const fs=require("fs")


fs.writeFileSync("nodeeeee.txt","intro to node")
fs.appendFileSync("nodeeeee.txt","node")

a=fs.readFileSync("nodeeeee.txt")


console.log(a.toString())

fs.renameSync('nodeeeee.txt', 'new-filename.txt');
fs.unlinkSync("new-filename.txt")


// fs.writeFile("hhh.txt","hello" ,(err,data)=>{
   
// if (err) {
// 		return console.error(err);
// 	}

// 	console.log("Data written successfully!");
// })

// const http = require('http');

// http.createServer((req, response) => {

//     const path=req.url;
//     const method=req.method;
//     console.log(path,method)
//     // response.write('Hello Wold!');
//     // response.end();
//    if(path.includes("/cd") && method=='GET')
//    {
//     response.write('Hello Wold!');
//     response.end();
//    }
//    else if(path.includes("/abc") && method=='GET')
//    {
//      response.write('home');
//     response.end();
//    }
// else{
//      response.write('mdsd');
//     response.end();
// }
// }).listen(8000);