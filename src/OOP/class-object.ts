class Employee {
    name : string;
    salary : number;

    constructor (n:string, s:number){
        this.name=n;
        this.salary=s
    }
}

const employee1 = new Employee('Istiaq', 22000);
const employee2 = new Employee('Hasan', 20000);

console.log(employee1);
console.log(employee2);
