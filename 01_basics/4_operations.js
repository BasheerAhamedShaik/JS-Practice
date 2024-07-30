console.log(2+1);
console.log(2-1);
console.log(2*1);
console.log(2**3);
console.log(2/2);
console.log(2%3);

console.log(2 === 3)   // strict equality
console.log('2' === 2)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

console.log("1" + 2);
console.log(1 + "2")
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log(3 + 2 - 1 % 5)
// above five lines of code is not encouragable. must square brackets for good readability of code.

console.log(true)  // true
console.log(+true) // 1

console.log(+"") // 0

let x = 3
let y = x++     // postfix increment
console.log(x,y)

let a = 3
let b = ++a    // prefix increment
console.log(a,b)

let c = 3
let d = c--    //postfix decrement
console.log(c,d) 

let e = 3
let f = --e    //prefix decrement
console.log(e,f)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment