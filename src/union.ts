// Literal type

type Status = 'panding';
const status: Status = 'panding'; // valid
// const status2: Status = 'completed'; --> // Error: Type '"completed"' is not assignable to type 'Status'.


// Basic Union

type StringOrNumber = string | number;
const value1: StringOrNumber = 'Hello';
const value2: StringOrNumber = 42;
// const value3: StringOrNumber = true; --> // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.

// Literal Union

type Direction = 'up' | 'down' | 'left' | 'right';
const move: Direction = 'up'; // valid
// const move2: Direction = 'forward'; --> // Error: Type '"forward"' is not assignable to type 'Direction'.


// Object Union

type User = {
    name: string;
    role : 'user';
    age: number;
};
type Admin = {
    name: string;
    role: 'admin';
    salary: number;
};

type Person = User | Admin;

const user1: Person = {
    name: 'John',
    role: 'admin',
    salary : 50000
};
