// Singleton => when you create object using constructor function or class, only one instance of that object is created and shared across the application.
// Object.create 

// Object Literal

const mySym = Symbol("key1"); // creating a symbol
const JsUser = {
    name: "Deeppak",
    "full name": "Deeppak Raam",
    // mySym: "value2", // here mySym will be treated as a string key (!The wrong way to use symbol in object. Asked in interview) 
    [mySym]: "value1", // symbol as a key (The correct way to use symbol in object)
    age: 25,
    localtion: "Nagpur",
    email: "deeppak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // deeppak@google.com
//console.log(JsUser[email]); // ReferenceError: email is not defined
console.log(JsUser["email"]); // The correct way to access using bracket notation
console.log(JsUser["full name"]); // Deeppak Raam - when property has space in between, we have to use bracket notation
console.log(JsUser[mySym]); // Only way to access symbol key in object

JsUser.email = "deeppak@meta.com"; // updating email

Object.freeze(JsUser); // freeze the object - you cannot add, delete or update any property after freezing the object
JsUser.email = "deeppak@yahoo.com"
console.log(JsUser.email); // deeppak@meta.com - email is not updated
console.log(JsUser);

const user = {
    name: "Deeppak Raam",
    age: 25,
    location: "Nagpur"
}

user.greeting = function() { // adding method to object
    console.log("Hello User");
}

user.greetingTwo = function() {
    console.log(`Hello user, ${this.name}`);
    
}
user.greeting(); // Hello User
user.greetingTwo();