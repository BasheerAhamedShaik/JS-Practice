"use strict"; // treat all JS code as newer version

// alert(3+3)   // this is node.js not browser

console.log("hello")   // readability of code

let name = "Harry"  // String type
let num = 123       // number type (2 to 2^53) --> this is not exact (refer "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures")
let isEligible = true // boolean it can be either "true/false"

// bigint
// null => standalone value
// undefined => type is undefined
// object => unique

console.log(typeof undefined);   // output is undefined
console.log(typeof null);        // output is object

console.log(typeof num);         // output is number      