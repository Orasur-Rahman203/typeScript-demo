var UsersB = /** @class */ (function () {
    function UsersB(userName, age, role) {
        this.userName = userName;
        this.age = age;
        this.role = role;
    }
    UsersB.prototype.displayInfo = function () {
        console.log("user name: ".concat(this.userName, ", age : ").concat(this.age, ", role : ").concat(this.role));
    };
    return UsersB;
}());
var userinfor = new UsersB("hasan ali", 25, "student");
userinfor.displayInfo();
var userinfor2 = new UsersB("orasur rahman", 24, "Jr. software developer");
userinfor2.displayInfo();
