const http=require('http')
const fs =require('fs')
const path=require('path')
const express =require('express')
const app = express();
const fileContent = fs.readFileSync('index.html')
// app.use(express.static('assets'));

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'}); 
    res.end(fileContent)
})

server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 3000");
  });