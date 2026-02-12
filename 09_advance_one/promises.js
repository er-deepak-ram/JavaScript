// Promises are used to handle asynchronous operations in JavaScript. They represent a value that 
// may be available now, or in the future, or never.
// Promise takes a function (callback) as an argument, which is called the executor function. 
// => The executor function takes two parameters: resolve and reject.

// Promise creation
const promise1 = new Promise((resolve, reject) => {
    // Do an async task, and then call resolve or reject
    // DB calls, network calls, cryptography, timers, etc.
    setTimeout(function() {
        console.log("Async task is complete")
        resolve() // promise is resolved. This will trigger the then() method attached to this promise. Can also pass data to resolve() which will be received in then() as an argument.
    }, 1000)
});

// Promise consumption after creation
// hint: then() have relation with resolve
promise1.then(function() {
    console.log("Promise consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is complete")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Promise 2 resolved")
})

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promise3.then(function(user) {
    console.log(user)
})

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The Promise is either resolved or rejected")
})


const promise5 = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)    
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response)   
    } catch (error) {
        console.log(error)  
    }
}

consumePromise5()

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Only use this for local development/testing

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        const data = await response.json() // Parse the JSON data
        console.log(data) 
    } catch (error) {
        console.log("E: ", error)
    }
}

// getAllUsers()

// More refined way to write the above function
fetch('https://jsonplaceholder.typicode.com/users')
.then((result) => result.json())
.then((jsonData) => console.log(jsonData))
.catch((error) => console.log(error))

/**
 * Interview Questions:
 * 1. If you made a request using promise and you receive an error code 404, where you will find it, in resolve or reject?
 * Answer: I'll find it in resolve (the .then() block), not reject.
 *      because,
 *        1. Fetch only rejects on network failures (no internet, DNS failure, CORS issues, etc.)
 *        2. HTTP error codes (404, 500, etc.) are treated as successful responses - they resolve, not reject
 *        3. You need to manually check response.ok or response.status to handle HTTP errors
 * 
 * See below example for more clarity:
 */
fetch('https://jsonplaceholder.typicode.com/users/999999')
    .then(response => {
        console.log('This runs even for 404!')
        console.log('Status:', response.status) // 404
        console.log('OK:', response.ok) // false
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log('Data:', data)
    })
    .catch(error => {
        console.log('Caught in reject:', error)
    })