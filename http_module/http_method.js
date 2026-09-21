import http from 'http';
import fs from 'fs';
const data=fs.readFileSync("config.json","utf8");
const server=http.createServer((req,res)=>{
    console.log("hello world");
    console.log(req.url);
    if(req.url==="/")//check if the request url is of home page
    {
        res.end("Welcome from home page");
    }
    else if (req.url === "/config"){
        res.end(JSON.stringify(data));
    }
    else{
        res.end("Welcome from server");
    }
})
server.listen(3000,"127.0.0.1",()=>{
    console.log('Server is running on port 3000');
})