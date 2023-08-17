let users:object[];
users=[];

let user1 :{id?:number, name: string}
 user1 ={id:1, name: "hasan"}
 users.push(user1)

let user2 :{id?:number, name: string}
 user2 ={id:2, name: "ali"}
 users.push(user2)
console.log("users is:", users);

for(const key in users){
// let counter=${key},
    console.log(`${key} user name:`, users[key]["name"]);
}