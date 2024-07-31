// primitive datatypes
// 7 types : Number, String, BigInt, Boolean, null, undefined, symbol(uniqueness)

let symbol = Symbol('123')
let sys = Symbol('123')
console.log(symbol === sys);
console.log(typeof sys);

let x = 231234567890784884848484848484848484848484n   // bigint
console.log(typeof x);

// non-primitive (reference)
// Array, Object, Functions
const heros = ['Ironman','Captain America','Hulk','Thor','Hawkeye','Blackwidow' ]
console.log(typeof heros);    // object

let myObj = {
    name:'stark',
    age:40
}
console.log(myObj);
console.log(typeof myObj)     // object

const myFunction = function(){
    console.log('Hello world');
}
console.log(typeof myFunction);  // function (actually it is a function object)

// typeof with diff datatypes

// Primitive                        Non - primitive

// Number => number                 Array => object
// String => string                 Object => object
// BigInt => bigint                 Function => function
// Boolean => boolean
// null => object
// undefined => undefined
// Symbol => symbol


// https://262.ecma-international.org/5.1/#sec-11.4.3



//**********************************************************************************//

// Stack (Primitive)  Heap(Non-primitive)
// datatypes are based on memory allocation

// Primitive datatypes =>  call by value (string,number,boolean,null,undefined,BigInt,symbol) =>Stack memory

// Reference/Non primitive data types => call by reference ( array,object, function) => heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

let myName = "Tony"
let anName = myName

anName = "Stark"
console.log(myName);
console.log(anName);

let obj1 = {
    name: 'harry',
    rollno: 21
}

let obj2 = obj1
console.log(obj1.name);   // harry

obj2.name = 'John'

console.log(obj1.name);   // John
console.log(obj2.name);   // John
