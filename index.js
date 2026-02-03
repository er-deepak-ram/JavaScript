let list = [1,2,3,4,5,6,7,8,9,10];

let prod = list.reduce((a, c) => a * c);

let sum = list.reduce((a, c) => a + c);

console.log(prod);
console.log(sum);

console.log(list.find(e => e % 5 === 0));
console.log(list.every(e => e % 2 === 0));
console.log(list.some(e => e % 5 === 0));

const a = [1, 23.45, 0.1,99, 344.2111, 0.9999];
console.log(a.sort((x, y) => y - x));