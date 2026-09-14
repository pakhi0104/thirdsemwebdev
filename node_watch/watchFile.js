const fs= require("fs");

const watcher=fs.watchFile("intro.txt", (curr, prev) => {
    console.log("Current mtime:", curr.birthtime.toISOString());
    console.log("Previous mtime:", prev.birthtime.toISOString());
}); 