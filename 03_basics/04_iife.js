// IIFE - Immediately Invoked Function Expression

// This function runs as soon as it is defined
// Named IIFE
(function connectToDatabase() {
    console.log("Connecting to the database...");
    console.log("Database connected");
})(); // JS doesn't know where to end the context of IIFE that why here ; is essential at the end of IIFE

/**What is IIFE?
 * To make a function safe from global scope pollution so that variables of global scope should not disturb the functionality of our
 * function and it must be called immediately we make use of IIFE
 */

// This is also an IIFE but written with help of arrow AKA unnamed IIFE
(() => {
    console.log("DB2 connected");
})();

// This is how you can pass an argument to an IIFE
((name) => {
    console.log(`DB3 connected ${name}`);
})('Hitesh');
// Imagine it as connectToDatabase(name) and we call a function by giving pair of parenthesis after the name of function and pass 
// argument between those pair of parenthesis. That's what the last pair of parenthesis in IIFE is doing here
