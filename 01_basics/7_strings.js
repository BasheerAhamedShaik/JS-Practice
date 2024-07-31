const name = 'Tony'
let score = 100

console.log(name + 'scored' + score)         // don't use this type of syntax for concatenation
console.log(`Hello my name is ${name} and my score is ${score}`);    // string interpolation, placeholders (This is recommended)

const myName = new String('Tony-Stark')

console.log(myName);  // [String: 'Tony-Stark'] but browser output is diff. It will show the result in key:value pairs along with length of string and prototype which contains all string methods
console.log(myName[0]) // T
console.log(myName.__proto__);  // {}

console.log(myName.length);        // 10
console.log(myName.toUpperCase()); // TONY-STARK
console.log(myName.charAt(0));     // T
console.log(myName.indexOf('T'));     // 0