//! typeof

let x = 10;
let y = ["Hello", "World"];
let z = { name: "John", age: 30 };
let m = null;

// console.log(typeof x); // Output: "number" 
// console.log(typeof y); // Output: "object"
// console.log(typeof z); // Output: "object"
// console.log(typeof m); // Output: "object"

//! Type Guard

const print = (value: string | number): void => {
    if (typeof value === "string") {
        // value is narrowed to string
        // console.log("String value:", value.toUpperCase());
    } else {
        // value is narrowed to number
        // console.log("Number value:", value.toFixed(2));
    }   
}


//! "in" operator

type bird = {
    fly: () => void;
}

type fish = {
    swim: () => void;
}

const move = (animal: bird | fish): void => {
    if ("fly" in animal) {
        // animal is narrowed to bird
        // console.log("Bird is flying");
    } else {
        // animal is narrowed to fish
        // console.log("Fish is swimming");
    }
}