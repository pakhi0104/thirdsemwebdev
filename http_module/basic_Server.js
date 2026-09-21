import http from 'http'
import fs from 'fs'
 //read index.html using synccrud at once only and copying it whenever the request is made
const data=fs.readFileSync("index.html");

//create basic http server
const server= http.createServer((req, res) => {
  console.log("Hello world");
  const order={
    orderid: 1098,
    des:"Delhi",
    source:"Ghaziabad",
    username:"Pakhi",
  }
console.log('read data: ${data}');
  res.writeHead(200,{
    "Content-Type":"application/json",
    "custom-header":"Hello ECE"
  })
  // res.statusCode= 200;
  // res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(order));
  })

  server.listen(3000, "127.0.0.1", ()=>{
    
    console.log('Server is running on port 3000');
  })


  //staus codes--->
  //200-OK
  //201-Created
  //400-Bad Request
  //401-Unauthorized
  //403-Forbidden
  //404-Not Found
  //500-Internal Server Error
  