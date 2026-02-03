// Primitive Data Types-
        // 1. Number
        // 2. String
        // 3. Boolean
        // 4. Null
        // 5. Undefined
        // 6. Symbol
        // 7. BigInt

const score = 100; // Number
console.log(`Score: ${score} ${typeof score}`)

const scoreValue = 100.3 // Number
console.log(`Score Value: ${scoreValue} ${typeof scoreValue}`);


const isLoggedIn = false; // Boolean
console.log(`Is Logged In: ${isLoggedIn} ${typeof isLoggedIn}`);

const outsideTemp = null; // Null object
console.log(`Outside Temp: ${outsideTemp} ${typeof outsideTemp}`);

let userEmail;
console.log(`User Email: ${userEmail} ${typeof userEmail}`); // Undefined

const id = Symbol("123")
console.log(typeof id); // symbol

const anotherId = Symbol("123")
console.log(id == anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 6545616165156154613151312n;
console.log(typeof bigNumber);


// Reference (non-primitive) Data Types
        // 1. Object
        // 2. Array
        // 3. Function

const heros = [ "Spider-Man", "Iron Man", "Captain America" ]
console.log(`Heros: ${heros} Type: ${typeof heros}`); // object


let myObj = {
    name: "Thor",
    age: 1500,
    isGod: true
}
console.log(`My Object: ${JSON.stringify(myObj)} Type: ${typeof myObj}`); // object

const myFunction = function() {
    console.log("Hello from myFunction");
}
console.log(`My Function: ${myFunction} Type: ${typeof myFunction}`); // function object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap (non-primitive)

// Stack (primitive) => You get a copy of the value
// Heap (non-primitive) => You get a reference to the object

let myYoutubename = "Programming World"
let anotherName = myYoutubename
console.log(anotherName); // Programming World

anotherName = "Code with Deeppak"
console.log(myYoutubename); // Programming World
console.log(anotherName); // Code with Deeppak

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1; // reference copy
console.log(user2.email); // user@gmail.com
user2.email = "deeppak@gmail.com"
console.log(user1.email); // deeppak@gmail.com                                                         
console.log(user2.email); // deeppak@gmail.com