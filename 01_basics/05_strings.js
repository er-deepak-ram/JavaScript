const name = "Deepak"
const repoCount = 50

// console.log(name + repoCount); // Deepak50

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Deepak-dr-com");
console.log(gameName[0]); // D (String is not an array but an object which have indexing. It also have length property and also lots of method inside prototype that can be seen in browser copnsole)
console.log(gameName.__proto__); // {} (prototype can be access by __proto__ which will have String prototype methods but those methods can be accessed directly)

// Some prototype methods that can be used direclt without using __proto__
console.log(gameName.length); // 13
console.log(gameName.toUpperCase());    // DEEPAK-DR-COM (But original String isn't changed)
console.log(gameName)   // [String: 'Deepak-dr-com']
console.log(gameName.charAt(2));    // e
console.log(gameName.indexOf("p")); // 3

const newString = gameName.substring(0, 4);
console.log(newString); // Deep

const anotherString = gameName.slice(-10, 6);
console.log(anotherString); // pak (negative index starts from the end of the string)

const newStringOne = "      Deepak      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deepak.com/deepak%20ram"
console.log(url.replace("%20", "-"));   // https://deepak.com/deepak-ram
console.log(url.includes("movies"));    // false (it checks if the url have 'movies')

console.log(gameName.split("-"));   // [ 'Deepak', 'dr', 'com' ]



