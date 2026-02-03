let score = "33a"
console.log(typeof score); // string
console.log(typeof(score)); // string

let score1 = null;
let scrore2 = undefined;
let score3 = true;

let valueInNumber = Number(score); // convert to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN => Not a Number, 0 for score1 and NaN for score2, 1 for score3 because it's true (0 for false)
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0

// let isLoggedIn = 1;
let isLoggedIn = "Deeppak";
let booleanIsLoggedIn = Boolean(isLoggedIn); // convert to boolean
console.log(booleanIsLoggedIn); // true 

// 1 => true; 0 => false
// "" => false; " " => true; "Deeppak" => true

let someNumber = 33;
let StringNumber = String(someNumber);
console.log(typeof StringNumber); // string
console.log(StringNumber); // "33"

// ********************************* operations **********************************
console.log("=================================");
let value = 3
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Deeppak";
let str3 = str1 + str2;
console.log(str3); // Hello Deeppak

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1 
console.log(+""); // 0

let gameCounter = 100
console.log(`gameCounter: ${gameCounter}`); // 100

let x = gameCounter++
console.log(`x: ${x}`); // 100
console.log(`gameCounter: ${gameCounter}`); // 101

let y = ++gameCounter
console.log(`y: ${y}`); // 102
console.log(`gameCounter: ${gameCounter}`); // 102









