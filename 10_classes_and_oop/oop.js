//************* */ object literal ******************* */
const user = {
    username: 'Deepak',
    loginCount: 5,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database")
        // console.log(`username: ${username}`) // ReferenceError: username is not defined. Because username is not defined in the scope/context of this function. It is a property of the user object.
        console.log(`username: ${this.username}`) 
        console.log(this) // this refers to the object that is calling the function. In this case, it refers to the user object.
    }
}

console.log(user.username)
user.getUserDetails()
console.log(this) // {}. In the global scope/context, this refers to the global object (window in browsers, global in Node.js).

// ***************** constructor function ******************* */
function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this // return this is implicitly added here, so writing it is optional in constructor functions.
}

const userOne = new User("Deepak", 12, true)
const userTwo = new User("John", 5, false)
// If we dont use new keyword, then userOne's value will be overriden and it will also have 'John' as username, and so on

console.log(userOne)
console.log(userTwo)

// new -> As soon as we use new keyword, 
//          1. a new empty object is created, 
//          2. then the constructor function is called with this set to that new object, 
//          3. and then the properties are added to that new object, 
//          4. and finally that new object is returned. 
// So, userOne and userTwo are two different objects created using the same constructor function.