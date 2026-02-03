const user = {
    username: 'Hitesh',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this refers to the current object 'user'
        
    }
}

user.welcomeMessage();
user.username = "Sam"
user.welcomeMessage();
console.log(this); // {}  In global context, this refers to the global object (window in browsers, global or empty object in Node.js)
// What is the global object in browser and Node.js?

function aFunction() {
    let username = "Hitesh"
    console.log(this); // this refers to the global object which have n numbers of properties and methods
    console.log(this.username); // undefined as username is not a property of global object
    
}
aFunction(); 

const anotherFunction = function() {
    let username = "Hitesh"
    console.log(this); 
    console.log(this.username);
}

anotherFunction();

const arrowFunction = () => {
    let username = "Hitesh"
    console.log(this); // {} In arrow function, this refers to the surrounding context's this (global object here)
    console.log(this.username); // undefined as username is not a property of global object
}
console.log("====================");

arrowFunction();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 5)); // 8

const addTwoNumbers = (num1, num2) => num1 + num2; // Implicit return

console.log(addTwoNumbers(10, 20)); // 30

const arrowFuncToReturnObject = () => ({ username: "Hitesh" }); // use () parenthesis to Return object using arrow function

console.log(arrowFuncToReturnObject()); // { username: 'Hitesh' }