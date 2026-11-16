const fs = require("fs")                               // callback based method

// fs.mkdir("./myFolder", (err) => {          // create a folder method 1
fs.mkdir("./myFolder1/myFolder2/myFolder3", { recursive: true }, (err) => {          // create a folder
    if (err) {
        console.log(err);
        return;
    }
    console.log("Folder myFolder created successfully");
    fs.writeFile("./myFolder/hello.txt", "Hello, World!", (err) => {          // create a file inside the folder
        if (err) {
            console.log(err);
            return;
        }
        console.log("File created");
    });
    fs.readdir("./myFolder", (err, files) => {             // read the folder
        if (err) {
            console.log(err);
            return;
        }
        console.log("Directory Content", files);
    });
});