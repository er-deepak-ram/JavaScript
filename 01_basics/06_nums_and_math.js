const score = 500
console.log(score); // 500

const balance = new Number(1000)
console.log(balance); // [Number: 1000]

console.log(balance.toString().length); // 4
console.log(balance.toFixed(2)); // Returns a String -> 1000.00

let otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // Returns a String -> 23.9
otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // Returns a String -> 124 because it applied precision on 3 digits only
otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3)); // Returns a String -> 1.12e+3 because it applied precision on 3 digits only and rest are in exponential form

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Returns a String -> 10,00,000 (easily readable format in Indian Numbering System)

// +++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

console.log(Math); //Try this in chrome console to see all Math methods and properties
console.log(Math.abs(-6));  // 6
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5 
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random());

console.log("Dice");
const dice = Math.floor(Math.random() * 6) + 1; // 1 to 6
console.log(dice);
console.log("Generic Dice");
const min = 10
const max = 20
const genericDice = Math.floor(Math.random() * (max - min + 1)) + min; // min to max
console.log(genericDice);






