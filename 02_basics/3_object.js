// we can declare object in two ways 1. as a constructor [object.create] 2. as a literal
// sigleton is created when we declare object as a constructor

// object literals


// ***declare a symbol then add them in keys of an object and print it***
// NOTE: symbols are introduced in Js to create unique keys before it is very hard to create unique keys using primitive datatypes in Js

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");

// Symbol("foo") === Symbol("foo");   // false

const mySym = Symbol("key1")    // declaring a symbol

const JsUser = {
    name: "Stark",              // by default key is treated as string("name") but value can be of any datatype you wish
    "full_name": "Tony Stark",  // when you miss underscore(having space btw) then we can't access through (JsUser.full name) throws an error
    [mySym]: "myKey1",
    age: 30,
    location: "Newyork",
    email: "Stark@starkindustries.com",
    isLoggedIn: false,
    lastLoginDays: ['Tue', 'Wed']
}
console.log(JsUser.email)           // Stark@starkindustries.com
console.log(JsUser["email"])        // Stark@starkindustries.com
console.log(JsUser.full_name)       // Tony Stark 
console.log(JsUser[mySym]);          // myKey1
console.log(typeof JsUser[mySym]);   // string (still had a confusion in adding a symbol as a key in the object)

JsUser.email = "Stark@industries.com"
// Object.freeze(JsUser)                 // can't modify further
JsUser.email = "Stark@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

//console.log(JsUser.greeting);      //   [Function (anonymous)]
//console.log(JsUser.greeting());    // Hello Js User (we get undefined also- undefined is bcz  in greeting function we already had  console.log('message') ...but while calling the function you used console.log(greeting()) again. due to console.log() we are getting an undefined. Just write gretting() and there will be no undefined.
JsUser.greeting()

// reference name in the same object (done by 'this' keyword)

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
JsUser.greetingTwo()


