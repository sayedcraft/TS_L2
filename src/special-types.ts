//! Top types

let a: any = 10; // any type can be assigned to any value
a = "Hello"; // no error

const b: unknown = 10; // unknown type can be assigned to any value
// b = "Hello";

//! Core types

let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;

//! Nuliable types

let myUndefined: undefined = undefined;
let myNull: null = null;

//! Unit type

const msg=()=>{
    console.log("Hello, World!");
}
msg();

//! Sub-type of unit type

const msg2=():undefined=>{
    console.log("Hello, World!");
}
msg2();

//! Bottom type

const throwError = (): never => {
    throw new Error("This function always throws an error");
}
throwError();