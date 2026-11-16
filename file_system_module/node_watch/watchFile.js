const fs = require("fs")

const watcher = fs.watchFile("intro.txt",{interval: 500}, (curr, prev) => {          // watch the file for changes
    console.log("Current file stats: ", curr.birthtime.toISOString());
    console.log("Previous file stats: ", prev.birthtime.toISOString());
}) 