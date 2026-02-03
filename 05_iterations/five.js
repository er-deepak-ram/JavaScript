const codingLanguages = ["js", "ruby", "java", "python", "cpp"]

console.log("****** First way ******");
codingLanguages.forEach( function (item) {
    console.log(item);
} )

console.log("****** Second way ******");
codingLanguages.forEach((item) => console.log(item))

console.log("****** Third way ******");
codingLanguages.forEach(display)

function display(item) {
    console.log(item);
}

console.log("****** Fourth way ******"); // one of the callback function we can use in forEach
codingLanguages.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        fileExtension: "js"
    },
    {
        languageName: "Java",
        fileExtension: "java"
    },
    {
        languageName: "Python",
        fileExtension: "py"
    }
]

myCoding.forEach((item) => { // Will take each object in array 
    console.log(item.languageName); // Here item will be the object itself
})