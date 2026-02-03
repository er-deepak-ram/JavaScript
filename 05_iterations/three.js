// for of

// ["","",""]
// [{},{},{}]

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (const num of numbers) {
    console.log(num)
}

const str = "Hello World!"
for (let alpha of str) {
    console.log(`Each char is ${alpha}`);
}

// ********************* Map **************************
// key-value pair
// unique key

const map = new Map()
map.set("IND", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

console.log(map);

for (const entry of map) {
    console.log(entry); // ['IND', 'India']
}

for (const [key, value] of map) {
    console.log(key, ':-', value); // IND :- India
}

const myObject = {
    game1: 'Mario',
    game2: 'Contra',
    game3: 'Project IGI',
    game4: 'NFS Most Wanted'
}

// for (const [key, value] of myObject) { // myObject is not iterable (Atleast in this way!!!! ;-))
//     console.log(key, ':-', value);
// }
