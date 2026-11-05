import "./external.js";
import "./union.js";
import "./type-alias-and-interface.js";
import "./special-types.js";
import "./narrowing.js";
import "./generic.js";
import "./OOP/class-object.js";
import "./OOP/Encapsulation.js";
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myArrayNum = [1, 2, 3, 4, 5];
let myArrayStr = ["apple", "banana", "cherry"];
let myTuple = ["Hello", 42];
let mySymbol = Symbol("mySymbol");
let myUndefined = undefined;
let myNull = null;
let myAny = "This can be any type";
// Tupple
let dhaka = ["Dhaka", 1000];
// dhaka[0] = "Chittagong"; // Error: Cannot assign to 'dhaka[0]' because it is a read-only property
// dhaka[1] = 2000; // Error: Cannot assign to 'dhaka[1]' because it is a read-only property
// -------------
const addTwoNumbers = (a, b) => {
    return a + b;
};
// console.log(addTwoNumbers(7777, 0)); 
// optional parameter
const addThreeNumbers = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// console.log(addThreeNumbers(1, 2)); // Output: 3
// console.log(addThreeNumbers(1, 2, 3)); // Output: 6
// Default parameter
const multiplyNumbers = (a, b = 2) => {
    return a * b;
};
// console.log(multiplyNumbers(5)); // Output: 10
// console.log(multiplyNumbers(5, 3)); // Output: 15
// Object Type
const user = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    action: () => {
        // console.log("User action performed");
    },
    badge: ["badge1", "badge2"]
};
const user2 = {
    name: "Jane Smith",
    age: 25,
    isAdmin: false,
    action: () => {
        // console.log("User2 action performed");
    },
    badge: ["badgeA", "badgeB"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};
const user3 = {
    name: "Alice Johnson",
    age: 28,
    isAdmin: true,
    action: () => {
        // console.log("User3 action performed"); 
    },
    badge: ["badgeC", "badgeD"],
    address: {
        street: "456 Oak Ave",
        city: "Los Angeles",
        country: "USA"
    }
};
const user4 = {
    name: "Bob Brown",
    age: 35,
    isAdmin: false,
    action: () => {
        // console.log("User4 action performed");
    },
    badge: ["badgeX", "badgeY"],
    address: {
        street: "789 Pine Rd",
        city: "Chicago",
        country: "USA"
    }
};
