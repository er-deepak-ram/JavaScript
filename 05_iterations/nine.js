// *********************** reduce ****************************

// arr.reduce( (acc, curr) => (acc + curr), 0)
console.log("reduce demo");

const array1 = [1, 2, 3, 4, 5]
const initialValue = 0

const sumWithInitial = array1.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue );

console.log(sumWithInitial); // 15

const myTotal = array1.reduce( (acc, curVal) => {
    console.log(`acc: ${acc} and curVal: ${curVal}`)
    return acc + curVal
}, 0 )

console.log(myTotal);
/**
 * acc: 0 and curVal: 1
   acc: 1 and curVal: 2
   acc: 3 and curVal: 3
   acc: 6 and curVal: 4
   acc: 10 and curVal: 5
 */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)