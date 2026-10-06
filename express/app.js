 const express = require ('express')
 const fs = require('fs')

// const data=fs.readFileSync("index.html" , "utf-8" );

// const app=express()
// console.log(app)
// app.get("/home" , (req ,res)=>{
//     //res.send("welcome from express")
//     res.end(data);

// })
// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log("Server is running on port 3000");
// })


const app=express()
const bookData =fs.readFileSync("./books.json", "utf8")
app.get("/",(req,res)=>{
    try{
    res.status(200).json({
        status : "Success",
        data :{
            book:bookData
        },
        count: bookData.length()
})
}catch(error){
  res.status(400).json({
    status:400,
    message:"Data not found" 
  })
}
})

app.listen(3000,()=>{
    console.log("Server is running.....")
})