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

console.log(Math); // Object [Math] {} Try this in chrome console to see all Math methods and properties
console.log(Math.abs(-6));  // 6
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5 
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // Always returns number between 0 and 1

console.log("1 to 6 Dice");
const dice = Math.floor(Math.random() * 6) + 1; // 1 to 6
/**
 * Math.random() -> - generates a random decimal number between 0 (inclusive) and 1 (exclusive).
 * Math.random() * 6 -> - scales that random number to a range between 0 and just under 6. Example: 0.2345 * 6 = 1.407, 0.8762 * 6 = 5.257
 * Math.floor(...) -> - rounds the number down to the nearest whole integer. So the possible results are 0, 1, 2, 3, 4, 5
 * + 1 -> - shifts the range up by one, making the possible results 1, 2, 3, 4, 5, 6
 */
console.log(dice);
console.log("Generic Dice");
const min = 10
const max = 20
const genericDice = Math.floor(Math.random() * (max - min + 1)) + min; // min to max
console.log(genericDice);






