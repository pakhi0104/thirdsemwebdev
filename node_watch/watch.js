const fs=require('fs');

fs.watch("intro.txt", (eventType, filename) => {
    console.log("Event:", eventType);
    console.log("Filename:", filename);
});
setTimeout(() => {
    watcher.close();
    console.log("Watcher closed");
},5000);