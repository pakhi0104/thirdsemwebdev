// execution order
console.log("Synchronous Code")

Promise.resolve().then(() => console.log("Micro Task Queue"))

setTimeout(() => {
    console.log("Macro Task Queue")
}, 0)

// event loop: 6 phases of queue: timers phase, pending callbacks phase, idle, prepare phase, poll phase, check phase, close callbacks phase

// cache memory is the fastest in memory architecture