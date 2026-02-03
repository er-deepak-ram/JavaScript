let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

function one() {
    const username = "Hitesh"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined
    two();
}

one();

if (true) {
    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // ReferenceError: website is not defined
}

// console.log(username); // ReferenceError: username is not defined

// ************************** Hoisting **************************
addOne(5) // works fine due to hoisting
function addOne(num) {
    return num + 1;
}

addOne(5) // works fine due to hoisting

addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2;
}

addTwo(5) // works fine
