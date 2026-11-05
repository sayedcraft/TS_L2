//! Encapsulation -> Protect a state data from outside of the class

//? Access Modifiers
// public -> can be accessed from anywhere (default)
// private -> can only be accessed within the class
// protected -> can be accessed within the class and its subclasses
// readonly -> can only be read, not modified

class Employee {
    public name : string;
    private salary : number;

    constructor (n:string, s:number){
        this.name=n;
        this.salary=s
    }

    get Salary(): number {
        return this.salary;
    }

    set Salary(newSalary: number) {
        this.salary = newSalary;
    }
}

const employee1 = new Employee('Istiaq', 22000);
const employee2 = new Employee('Hasan', 20000);

// employee1.salary = 25000; // Directly modifying the salary property from outside the class

console.log(employee1.Salary);

employee2.Salary = 500000; // Using the setter method to modify the salary property
console.log(employee2.Salary);
