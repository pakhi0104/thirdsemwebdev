const fs= require("fs")
fs.writeFileSync("notes.txt", "Hello Node.js")

const_data=fs.readFileSync("notes.txt")
console.log('read data: ${data}')