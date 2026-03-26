const accountId = 12345; // Declaration and Initialization for constant
let accountEmail = "deepak.kumar2305@gmail.com"; // Declaration and Initialization for variable
var accountPassword = "@dmin123"; // Declaration and Initialization for variable (avoid using var in modern JS)
accountCity = "Nagpur"; // Implicit declaration and Initialization (not recommended)
let accountState; // Declaration without initialization

// accountId = 456; // Not allowed
console.log(accountId);
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState }); // Object
console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ]); // Array

/**
 * * Difference between console.table({}) and console.table([]):
 * -> When you wrap the variables in curly braces {}, you are utilizing JavaScript's ES6 shorthand property names. It creates an object where
 *    the keys are your variable names and the values are the variables' contents.
 * 
 * console.table will use the object's keys for the (index) column. Following will be the output in tabular form
 * (index)          Values
 * accountId        12345
 * accountEmail     'deepak.kumar2305@gmail.com'
 * accountPassword  '@dmin123'
 * accountCity      'Nagpur'
 * accountState     undefined
 * 
 * -> When you wrap the variables in square brackets [], you are creating a standard array containing only the values of those variables. 
 *    The variable names themselves are discarded
 * 
 * console.table will use standard zero-based numeric arrays for the (index) column. Following will be the output in tabular form
 * (index)          Values
 * 0                12345
 * 1                deepak.kumar2305@gmail.com
 * 2                '@dmin123'
 * 3                'Nagpur'
 * 4                undefined
 */