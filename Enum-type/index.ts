enum RequestType{
    // readData,
    readData=1,
    saveData=2,
    // deleteData,
    updateData=3,
}
console.log(RequestType);
console.log(RequestType.updateData);
console.log(RequestType.saveData);

enum RequestType{
    readData2="Read Data",
    saveData2="Save Data",
    updateData2="Update Data"
}

console.log(RequestType);
console.log(RequestType.readData2);
console.log(RequestType.saveData2);
console.log(RequestType["updateData2"]);

enum user {
    id=1,
    name="hasan"
}


 