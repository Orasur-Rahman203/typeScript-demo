var userlist;
userlist = [];
var userlist1;
userlist1 = { id: 1, name: "hasan", role: "users" };
userlist.push(userlist1);
var userlist2;
userlist2 = { name: "ali", role: "student" };
userlist.push(userlist2);
var userlist3;
userlist3 = { id: 3, name: "Orasur Rahman", role: "Developer" };
userlist.push(userlist3);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
