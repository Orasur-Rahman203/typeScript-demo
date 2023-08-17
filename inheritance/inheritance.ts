class Student{
    id:number;
    name:string;
    dept?:string;

    constructor(id:number, name:string, dept?:string){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    display():void{
        console.log(`id : ${this.id}, name : ${this.name}, department : ${this.dept}`);
    }
}

class User extends Student{
role:string;

constructor(id:number, name:string, role:string){
super(id, name);
this.role=role;
}
display(): void {
    console.log(`userId : ${this.id}, name : ${this.name}, role : ${this.role}`);  
}
}

let student1=new Student(1, "hasan", "cse");
student1.display();


let user1=new User(203015020, "orasur rahman", "Developer");
user1.display();

