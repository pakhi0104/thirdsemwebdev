const fs = require('fs')

const watcher = fs.watch("intro.txt", (eventType, filename) => {          // watch the file for changes
    console.log("Event: ", eventType);
    console.log("File name: ", filename);
})

setTimeout(() => {
    watcher.close()
    console.log("Watcher closed");
}, 5000)