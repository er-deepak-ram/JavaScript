// // const tinderUser = new Object(); // Object constructor syntax (Singleton object)
// console.log(tinderUser); // {}

const tinderUser = {}; // Object literal syntax (non-Singleton object)
console.log(tinderUser); // {}

tinderUser.id = "123abc";
tinderUser.name = "Yash";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Yash",
            lastName: "Rahangdale"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2}; // nested object
console.log(obj3);
const mergedObject = {...obj1, ...obj2}; // merging two objects using spread operator
console.log(mergedObject);
const anotherMergedObject = Object.assign({}, obj1, obj2); // merging two objects using Object.assign
console.log(anotherMergedObject);

// when we read from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    }
]

// users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] to get all keys of object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // to get key value pair in form of array [ [ 'id', '123abc' ], [ 'name', 'Yash' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

// *************************** Object de-structuring ***************************
const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
// const {courseInstructor} = course; // object de-structuring
// console.log(courseInstructor);
const {courseInstructor: instructor} = course; // object de-structuring with aliasing
console.log(instructor); // Hitesh

// **************************** JSON API ****************************


