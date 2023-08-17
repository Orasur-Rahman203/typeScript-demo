var users;
users = [];
var user1;
user1 = { id: 1, name: "hasan" };
users.push(user1);
var user2;
user2 = { id: 2, name: "ali" };
users.push(user2);
console.log("users is:", users);
for (var key in users) {
    // let counter=${key},
    console.log("".concat(key, " user name:"), users[key]["name"]);
}
