console.log("Running basics.js")

// synchronous programming
console.log(" --- synchronous start --- ")
for(let i = 1; i <= 10; i++) {
    console.log(`${i}`)
}
console.log(" --- synchronous end --- ")

// asynchronous programming
console.log(" --- asynchronous start --- ")
setTimeout (() => {
    console.log("Hello World!")
}, 1000)
console.log(" --- asynchronous end --- ")

// four components of node architechture are callstack, node js api, callback queue(micro, macro) and event loop or libuv also