const fs=require("fs")
fs.writeFile("notes.txt", "Hello Node.js", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    fs.readFile("notes.txt", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log(data());
    });
});

fs.appendFile("notes.txt", " This is an appended text.", (err) => {
    if (err) {
        console.error("Error appending to file:", err);
        return;
    }
    console.log("Text appended successfully");
});

