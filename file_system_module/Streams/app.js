import fs from 'fs'

// Readable Streams
const readStream = fs.createReadStream("input.txt", {encoding: "utf8"})
readStream.on("data", (chunk) => {
    console.log("Data Recieved");
    console.log("Data: ", chunk)
})
readStream.on("end", () => {
    console.log("END")
})
readStream.on("error", (error) => {
    console.log("Error: ", error.message)
})

// create writeable stream
const writeStream = fs.createWriteStream("output.txt", {encoding: "utf8"})
writeStream.write("Hello\n")
writeStream.on("finish", () => {
    console.log("Write completed")
})
writeStream.on("error", (error) => {
    console.log("Error: ", error.message)
})

readStream.pipe(writeStream)