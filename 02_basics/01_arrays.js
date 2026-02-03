// array

// const myArr = [10, 20, 30, 40, 50, true, "Deeppak"] // it works
const myArr = [10, 20, 30, 40, 50] // In JS arrays are resizable and can hold multiple types
const myHeros = ["Ironman", "Spiderman", "Thor", "Hulk"]
const myArr2 = new Array(11, 22, 33, 44, 55) // another way to create array using constructor

console.log(myArr[0]);

// In JS Arrays copy operations are done by reference (shallow copy)

// Array Methods

myArr.push(60) // adds element at the end
myArr.push(70)
console.log(myArr);

myArr.pop() // removes element from the end
console.log(myArr);

myArr.unshift(0) // adds element at the start
console.log(myArr);

myArr.shift() // removes element from the start
console.log(myArr);

console.log(myArr.includes(100)); // false. Returns boolean if element is present
console.log(myArr.indexOf(100)); // -1. Returns index of element if present else -1

const newArr = myArr.join() // converts array to string with , as separator by default
console.log(newArr);    // 10,20,30,40,50,60
console.log(typeof newArr); // string

// sclice and splice

console.log("Original Array", myArr); // [ 10, 20, 30, 40, 50, 60 ]
const slicedArr = myArr.slice(1, 3) // creates a new array by slicing from start index to end index-1

console.log("Sliced Array", slicedArr); // [ 20, 30 ]
console.log("Original Array after slice", myArr); // [ 10, 20, 30, 40, 50, 60 ] - original array remains unchanged

const splicedArr = myArr.splice(1, 3) // removes elements from start index to end index and returns them
console.log("Spliced Array", splicedArr); // [ 20, 30, 40 ]
console.log("Original Array after splice", myArr); // [ 10, 50, 60 ] - original array is modified

