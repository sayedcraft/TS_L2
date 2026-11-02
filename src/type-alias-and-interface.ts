// Type alias vs Interface

// ? Interface is generally connected to objects
// ? Type alias can be used for any type, including primitives, unions, tuples, literals and more.

// ---------------

type id = number;
// ! interface id = number; 
// Error: An interface can only extend an object type or intersection of object types with statically known members.

type role = 'admin' | 'user';
// ! interface role = 'admin' | 'user'; --> 
// Error: An interface can only extend an object type or intersection of object types with statically known members.

interface IUser {
    name: string;
    age: number;
    isAdmin: boolean;
    badge : string[];
    role : 'admin' | 'user';
}

const user1: IUser = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    badge: ["badge1", "badge2"],
    role: 'admin'
};


// todo : Interface

interface Company{
    cname: string;
}

interface Employee extends Company{
    ename: string;
    eid: number;
}
// Here happen on kind of inheritance, Employee interface is extending Company interface, so Employee interface will have all the properties of Company interface and also its own properties.
const employee1: Employee = {
    cname: "Tech Corp",
    ename: "Alice Smith",
    eid: 12345
}; 

// todo : Type alias

type CompanyType = {
    cname: string;
};
type EmployeeType = CompanyType & {
    ename: string;
    eid: number;
};

const employee2: EmployeeType = {
    cname: "Tech Corp",
    ename: "Alice",
    eid: 12345
};