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

console.log(myName.substring(0,4));  // Tony
console.log(myName.substring(-5,4));  // Tony (negative indexing not works)
console.log(myName.slice(-8,4));  // ny

const user = "    Tony   "
console.log(user);         // prints as it is
console.log(user.trim());  // removes whitespaces

// we have trimStart() and trimEnd() but trim() is a combination of both

const url = "www.portfolio.com"
console.log(url.replace('portfolio','Tony'))

console.log(url.includes('Tony'))
console.log(myName.split('-'));   // gives output in the form of arrays  [ 'Tony', 'Stark' ]

