const score = 100
console.log(score)

const sc = new Number(200)  // explicit declaration
console.log(sc)             // [Number: 200]

console.log(sc.toString())
console.log(sc.toFixed(2))  // 200.00

const num = 34.456
console.log(num.toPrecision(2))  // 34

const num1 = 34.556
console.log(num.toPrecision(2)); // 34

const num2 = 34.656
console.log(num.toPrecision(3));  // 34.5

const num3 = 34.656
console.log(num.toPrecision(4));  // 34.46 (need to study more about toPrecision)

const hund = 10000000
console.log(hund.toLocaleString());        // 10,000,000  
console.log(hund.toLocaleString('en-IN')); // 1,00,00,000


// ************************************Math********************************************//

console.log(Math);
console.log(Math.abs(-4));    // 4
console.log(Math.round(3.5645)); // 4
console.log(Math.ceil(4.2));   // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.min(4,5,6,7))
console.log(Math.max(4,5,6,7))

console.log(Math.random())
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)