const promise1 = new Promise((resolve, reject) => {
    let success = false; // change this to true to see the success case
    if(success) {
        resolve({
            id: 2930309,
            username: "John Doe"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

promise1
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error.message); // we can also use error.toString() to get the error message or we can simply use console.error(error) to print the error object
    });

const promise2 = new Promise((resolve, reject) => {
    let success = true; // change this to false to see the error case
    if(success) {
        resolve({
            task: "Promise states implementation",
            status: "Successful"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

promise2
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error.message);
    });

Promise.all([promise1, promise2])
.then((responses) => {
    console.log(responses);
})
.catch((error) => {
    console.error(error.message);
});
 // this is like an AND gate, it will only resolve if both promises are resolved, otherwise it will reject

Promise.race([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    });
// this is like an OR gate, it will resolve if any of the promises is resolved, otherwise it will reject

Promise.allSettled([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.error(error.message);
    });
// this will return the status of all the promises, whether they are resolved or rejected

Promise.any([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    });
// this will return the first resolved promise, if all promises are rejected, it will throw an error

promise1
.then((response) => {
    return response
})
.then((response2) => {
    console.log(response2.username);
})
.catch((error) => {
    console.error(error.message);
})