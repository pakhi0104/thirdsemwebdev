async function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if(success) {
            resolve({
                id: 2930309,
                username: "John Doe"
            });
        } else {
            reject(new Error("Data not fetched"));
        }
    });
}

async function getUser() {
    try {
        const user = await fetchUserData();
        console.log(user);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
getUser();