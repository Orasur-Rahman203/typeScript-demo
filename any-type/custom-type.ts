

type User={id?:number, name: string, role:string}

let userlist:User[];
userlist=[];

let userlist1 :User;
userlist1 ={id:1, name: "hasan", role:"users"}
userlist.push(userlist1)

let userlist2 :User;
userlist2 ={ name: "ali", role:"student"}
userlist.push(userlist2)
let userlist3 :User;
userlist3 ={id:3, name: "Orasur Rahman", role:"Developer"}
userlist.push(userlist3)
// console.log("users is:", userlist);

// for(const key in userlist){
//     console.log(`${key} user name:`, userlist[key]["name"],`user role:`, userlist[key]["role"]);
// }


type RequestType="GET" | "POST";

let getRequest: RequestType;
getRequest="GET"

function requestHandler(requestType:RequestType){
    console.log(requestType);
}

requestHandler("GET")