function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("P");
    console.log("A");
    console.log("K");
}

sayMyName();

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// addTwoNumbers(); // NaN
let result = addTwoNumbers(10, 20);
result = addTwoNumbers(10, "20") // 1020
result = addTwoNumbers(3, "a") // 3a

// JS also have defalut arguments like C++ or Python, where we can give username = "Guest"
function loginUserMessage(username) {
    if (username === undefined) {
    // if (!username) { Hence underfined is flalsy value and it will also work for other falsy values like null, 0, ""
        return "Please enter username";
    }
    return `${username} logged in successfully`;
}

console.log(loginUserMessage("Hitesh"));
console.log(loginUserMessage()); // undefined logged in successfully in absence of if statement

// ******************************** Rest Parameters ********************************
function calculateCartPrice(...prices) { // Rest parameter is an array of all arguments passed
    let sum = 0
    for (let price of prices) {
        sum += price;
    }
    return sum;
}

console.log(calculateCartPrice(200, 400, 500, 1000)); 

const product = {
    name: "Samsung Galaxy S24 Ultra",
    price: 139999,
}

function handleObject(obj) {
    console.log(`Product name is ${obj.name} and price is Rs. ${obj.price.toLocaleString('en-IN')}`);
}
handleObject(product);

handleObject({
    name: "iPhone 15 Pro Max",
    price: 194999,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondElement(arr) {
    return arr[1];
}
console.log(returnSecondElement(myNewArray)); // 400