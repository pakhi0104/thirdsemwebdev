import http from 'http'
import fs from 'fs'
const Homedata=fs.readFileSync("home.html", "utf-8");
//create basic server
const server= http.createServer((req, res) => {
console.log("hello world");
console.log(req.url)//check request from the url in browser
if(req.url==="/")//check if the request url is of home page
{
    res.end(Homedata.replace("{{%CONTENT%}}", "Home page"));
}else if(req.url==="/about")//check if the request url is of about page
{
    res.end("hello from about page");
}else if(req.url==="/contact"){
    res.end("hello from contact page");
}
})

server.listen(3000, "127.0.0.1", ()=>{
  console.log('Server is running on port 3000');
})