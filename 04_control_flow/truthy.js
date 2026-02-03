const userEmail = "d@deeppak.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/**
 * falsy value
 * 
 * false
 * 0
 * -0
 * BigInt 0n
 * ""
 * null
 * undefined
 * NaN
 * 
 * All values except above are truthy values, below are some truthy values that confuses people that's why asked in interviews
 * "0"
 * 'false'
 * "  "
 * []
 * {}
 * function(){} // this is an empty function
 */

// Check of empty array
let dataArray = []

if(dataArray.length === 0) {
    console.log("Array is empty");
}

// check for empty object
let anObj = {}
if (Object.keys(anObj).length === 0) { // since Object.keys(anObj) will return a string[] so we can check for its length
    console.log("Object is empty");
}

if (false == 0) { // true
    console.log("Remember this");
}
if (false == '') { // true
    console.log("Remember this");
}
if (0 == '') { // true
    console.log("Remember this");
}

// Nullish Coalescing Operator (??) : whole concept revolve around null and undefined keywords
// It returns the right-hand side operand if the left operand is null or undefined

const nullValue = null;
const emptyText = "";
const someNumber = 42;

const valueA = nullValue ?? "default for A";
const valueB = emptyText ?? "default for B";
const valueC = someNumber ?? 0;

console.log(valueA); // default for A
console.log(valueB); // "" (as the empty string is not null or undefined)
console.log(valueC); // 42

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5 

///////

const count = 0
const text = ""

const qty = count || 42
const message = text || "hi!"
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""

/**
 * The nullish coalescing operator avoids this pitfall by only returning the second operand when the first one evaluates to either null 
 * or undefined (but no other falsy values):
 */

const myText = "" // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood"
console.log(preservingFalsy); // '' (as myText is neither undefined nor null) so if we are concerned of only null and undefined then 
                              // go for ?? (nullish coalescing operator)


// *********************** Short-circuiting *********************

function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}

console.log(a() ?? c());
// Logs "a was called" then "c was called" and then "foo"
// as a() returned undefined so both expressions are evaluated

console.log(b() ?? c());
// Logs "b was called" then "false"
// as b() returned false (and not null or undefined), the right
// hand side expression was not evaluated


// Ternary operator
// condition ? true_statement : false_statement