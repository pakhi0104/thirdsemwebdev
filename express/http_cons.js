const http = require('http');

const server= http.createServer((req,res)=>{
  if(req.method==="GET" && req.url==="/"){    
   res.end("GET request is received for home page") 
 } else if(req.method==="POST" && req.url==="/"){
   res.end("POST request is received for home page") 
 } else if(req.method==="PATCH" && req.url==="/users"){
   res.end("PATCH request is received for users page") 
 }
})
server.listen(3000,(res,req)=>{
  console.log("Server is running on port 3000");
})