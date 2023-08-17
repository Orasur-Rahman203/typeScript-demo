class student{
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
let info=new student(1, "hasan", "computer");
info.display();
let info2=new student(2, "orasur rahman", "cse");
info2.display();