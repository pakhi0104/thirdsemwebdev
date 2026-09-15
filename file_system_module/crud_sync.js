const fs= require("fs")

//reading data from notes.txt using synccrud
const data=fs.readFileSync("notes.txt")
console.log('read data: ${data}')

//writing data to notes.txt using synccrud
fs.writeFileSync("notes.txt", "Hello Node.js")
console.log('data written to notes.txt')