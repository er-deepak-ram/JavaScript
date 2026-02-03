const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(key); // js ....
}

for (const key in myObject) {
    console.log(myObject[key]); // JavaScript ...
}

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`); // js shortcut for JavaScript ...
}

const programming = ["c", "cpp", "java", "js", "py", "rb"]
for (const index in programming) { // If we use for-in loop in array then it will give index, unlike for-of which directly gives values
    console.log(programming[index]);
}

const map = new Map()
map.set("IND", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

// for (const key in map) {
//     console.log(key);
// }