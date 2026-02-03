const name = "Deepak"
const repoCount = 50

// console.log(name + repoCount);

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Deepak-dr-com");
console.log(gameName[0]); // D
console.log(gameName.__proto__); // String prototype methods 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("p"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "      Deepak      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deepak.com/deepak%20ram"
console.log(url.replace("%20", "-"));
console.log(url.includes("movies"));

console.log(gameName.split("-"));



