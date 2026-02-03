const accountId = 12345; // Declaration and Initialization for constant
let accountEmail = "deepak.kumar2305@gmail.com"; // Declaration and Initialization for variable
var accountPassword = "@dmin123"; // Declaration and Initialization for variable (avoid using var in modern JS)
accountCity = "Nagpur"; // Implicit declaration and Initialization (not recommended)
let accountState; // Declaration without initialization

// accountId = 456; // Not allowed
console.log(accountId);
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState }); // Object
console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ]); // Array
