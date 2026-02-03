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
console.log(flattenedArray);

console.log(Array.isArray("Deeppak")); // false
console.log(Array.from("Deeppak")); // [ 'D', 'e', 'e', 'p', 'p', 'a', 'k' ]
console.log(Array.from({name: "Deeppak"})); // [] Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] 
