const marvel_heros = ['Ironman', 'Thor', 'Hulk']
const dc_heros = ['superman', 'Flash', 'Batman']

// arr.push(arr1) : Appends new elements to the end of an array, and returns the new length of the array.

// marvel_heros.push(dc_heros)              // This is not a good way to merge
// console.log(marvel_heros);               //  [ 'Ironman', 'Thor', 'Hulk', [ 'superman', 'Flash', 'Batman' ] ]

// arr.concat(arr1) : Appends new elements to the end of an array, and returns the new length of the array.

const newArr = marvel_heros.concat(dc_heros)
console.log(newArr);                        // [ 'Ironman', 'Thor', 'Hulk', 'superman', 'Flash', 'Batman' ]

const allHeros = [...marvel_heros, ...dc_heros]  // this is recommended way using spread operator to merge arrays, there is no limitation in the values 
console.log(allHeros);                       //  [ 'Ironman', 'Thor', 'Hulk', 'superman', 'Flash', 'Batman' ]

const arr = [1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, 10, [4 ,5, 6] ], 11, 12] 
const arr1 = arr.flat(Infinity)              // returns the whole new combined array 
console.log(arr1);

// arr.from(iterable object) : Creates an array from an iterable object.

console.log(Array.isArray('TonyStark'));     // false
console.log(Array.from("TonyStark"));        // converts this string into array of elements
console.log(Array.from({name: "tony"}));     // [] you need specify whether you want to create array from key or value

// arr.of(item) : Returns a new array from a set of elements.

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));           // [ 100, 200, 300 ]








