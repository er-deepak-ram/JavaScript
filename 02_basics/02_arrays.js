const marvelHeros = [ "Thor", "Ironman", "Hulk", "Spiderman" ];
const dcHeros = [ "Superman", "Batman", "Wonder Woman", "Flash" ];

marvelHeros.push(dcHeros); // adds the entire dcHeros array as a single element at the end
console.log("After push:", marvelHeros);
// Output: [ 'Thor', 'Ironman', 'Hulk', 'Spiderman', [ 'Superman', 'Batman', 'Wonder Woman', 'Flash' ] ]

marvelHeros.pop();

const allHeros = marvelHeros.concat(dcHeros); // creates a new array by concatenating marvelHeros and dcHeros & returns it
console.log("After concat: ",allHeros); // Output: [ 'Thor', 'Ironman', 'Hulk', 'Spiderman', 'Superman', 'Batman', 'Wonder Woman', 'Flash' ]

console.log(marvelHeros); // does not modify marvelHeros
console.log(dcHeros); // does not modify dcHeros

const allNewHeros = [...marvelHeros, ...dcHeros]; // using spread operator to combine arrays
console.log("Using spread operator: ", allNewHeros); // Output: [ 'Thor', 'Ironman', 'Hulk', 'Spiderman', 'Superman', 'Batman', 'Wonder Woman', 'Flash' ] 

const complicatedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattenedArray = complicatedArray.flat(Infinity); // flattens the array up to Infinity levels deep
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
/**
 * the Infinity here is a special built‑in constant in JavaScript. It represents a value larger than any finite number.
 * When used as the argument to .flat(), it means:
 *      - "Flatten this array to any depth necessary."
 *      - Instead of specifying a number like 1 (one level deep) or 2 (two levels deep), Infinity tells JavaScript to keep flattening until there are no nested arrays left.
 */

console.log(Array.isArray("Deeppak")); // false
console.log(Array.from("Deeppak")); // [ 'D', 'e', 'e', 'p', 'p', 'a', 'k' ]
console.log(Array.from({name: "Deeppak"})); // [] Passing object to Array.from() method -> Interesting case for interviews
/**
 * If we pass an object to the Array.from() method, it will not be able to convert it into an array, that's why it will return an empty array
 * To be able to convert an object into an array we have to tell if we want to consider keys into array or values into array
 */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] 
