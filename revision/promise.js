const promise1 = new Promise ((resolve, reject) => {
    let success = true;
    if(success) {
        resolve({
            id: 21691099,
            username: "Nidhi Verma"
        });
    } else {
        reject(new Error("Data not fetched"));
    }
});

promise1.then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error.message);
});