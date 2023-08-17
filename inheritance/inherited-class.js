var student = /** @class */ (function () {
    function student(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
    student.prototype.display = function () {
        console.log("id : ".concat(this.id, ", name : ").concat(this.name, ", department : ").concat(this.dept));
    };
    return student;
}());
var info = new student(1, "hasan", "computer");
info.display();
var info2 = new student(2, "orasur rahman", "cse");
info2.display();
