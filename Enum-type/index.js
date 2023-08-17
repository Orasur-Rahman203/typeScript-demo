var RequestType;
(function (RequestType) {
    // readData,
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    // deleteData,
    RequestType[RequestType["updateData"] = 3] = "updateData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.updateData);
console.log(RequestType.saveData);
(function (RequestType) {
    RequestType["readData2"] = "Read Data";
    RequestType["saveData2"] = "Save Data";
    RequestType["updateData2"] = "Update Data";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.readData2);
console.log(RequestType.saveData2);
console.log(RequestType["updateData2"]);
var user;
(function (user) {
    user[user["id"] = 1] = "id";
    user["name"] = "hasan";
})(user || (user = {}));
