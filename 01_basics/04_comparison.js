console.log("2" > 1); // true because 2 is greater than 1
console.log("02" > 1); // true because "02" is converted to 2

console.log(null > 0); // false 
console.log(null == 0); // false
console.log(null >= 0); // true

/* The reason is that an equality check == and comparison check > < >= <= work differently.
   Comparisions convert null to a number, treating it as 0.
   That's why (3) null >= 0 is true, but null == 0, null > 0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
// All are false because undefined is not converted to any number and remains undefined in all cases

// Always use === and !== for comparison to avoid type coercion issues






