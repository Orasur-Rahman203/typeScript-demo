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
    function Student(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
    Student.prototype.display = function () {
        console.log("id : ".concat(this.id, ", name : ").concat(this.name, ", department : ").concat(this.dept));
    };
    return Student;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name, role) {
        var _this = _super.call(this, id, name) || this;
        _this.role = role;
        return _this;
    }
    User.prototype.display = function () {
        console.log("userId : ".concat(this.id, ", name : ").concat(this.name, ", role : ").concat(this.role));
    };
    return User;
}(Student));
var student1 = new Student(1, "hasan", "cse");
student1.display();
var user1 = new User(203015020, "orasur rahman", "Developer");
user1.display();
