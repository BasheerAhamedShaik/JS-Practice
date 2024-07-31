// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 != 3);
// console.log(2 == 3);

console.log("2" == 2);  // implicit conversion // true
console.log("02" == 2); // true

console.log(null > 0);   // false
console.log(null == 0);  // equality check. output is false
console.log(null >= 0);  // equality check is diff from comparison. so, here the output is true

console.log(undefined > 0);  // false
console.log(undefined == 0); // false 
console.log(undefined >= 0)  // false

console.log("2" === 2);    // false (strict equality check)