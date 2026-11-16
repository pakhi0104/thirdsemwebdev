import fs from "fs/promises"; // promise based method

async function readFileContent(filename) {
    const data = await fs.readFile(filename, "utf8"); // reads the data from the file
    console.log(data)
}
readFileContent("notes.txt")