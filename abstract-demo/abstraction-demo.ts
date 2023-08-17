
abstract class Student{
    // id:number;
    name:string;
    dept?:string;

    constructor( name:string, dept?:string){
        // this.id=id;
        this.name=name;
        this.dept=dept;
    }
    abstract display():void;
}

class User extends Student{
id:number;
role:string;

constructor(id:number, name:string,dept:string, role:string){
super(name, dept);
this.role=role;
this.id=id;
}
display(): void {
    console.log(`userId : ${this.id}, name : ${this.name},department : ${this.dept}, role : ${this.role}`);  
}
}

let user1=new User(203015020, "orasur rahman", "cse", "Developer");
user1.display();

