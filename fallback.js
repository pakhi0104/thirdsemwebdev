// nested: getUser to getProfile to getPosts
function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        const user = { id: 101, name: "John Doe" };
        callback(null, user);
    }, 1000);
}
function getProfile(id, callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        const profile = { username: "JohnDoe", location: "New York" };
        callback(null, profile);
    }, 1000);
}
function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(null, posts);
    }, 1000);
}

getUser(1, function (error, user) {
    getProfile(user.id, function (error, profile) {
        if (error) {
            return;
        }
        getPosts(profile.username, function (error, posts) {
            if (error) {
                console.error(error);
                return;
            }
            console.log(`Fetched posts ${posts}`);
        });
    });
});