import fs from 'fs';

const  readStream=fs.createReadStream("input.txt");
readStream.on("data",(chunk)=>{
    console.log("Data chunk received:");
    console.log("Data:", chunk);
})

const writeStream=fs.createWriteStream("output.txt");
writeStream.write("Hello, this is a test message.\n");
