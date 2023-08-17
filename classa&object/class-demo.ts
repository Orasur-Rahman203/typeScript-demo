class UsersB{
    userName:string;
    age:number;
    role:string;
    constructor(userName:string, age:number, role:string){
        this.userName=userName;
        this.age=age;
        this.role=role;
    }
    displayInfo():void{
        console.log(`user name: ${this.userName}, age : ${this.age}, role : ${this.role}`);
    }
}

let userinfor=new UsersB("hasan ali", 25, "student");
userinfor.displayInfo()

let userinfor2=new UsersB("orasur rahman", 24, "Jr. software developer");
userinfor2.displayInfo()

