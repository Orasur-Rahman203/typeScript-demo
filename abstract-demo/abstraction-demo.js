var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, dept) {
        // this.id=id;
        this.name = name;
        this.dept = dept;
    }
    return Student;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name, dept, role) {
        var _this = _super.call(this, name, dept) || this;
        _this.role = role;
        _this.id = id;
        return _this;
    }
    User.prototype.display = function () {
        console.log("userId : ".concat(this.id, ", name : ").concat(this.name, ",department : ").concat(this.dept, ", role : ").concat(this.role));
    };
    return User;
}(Student));
var user1 = new User(203015020, "orasur rahman", "cse", "Developer");
user1.display();
