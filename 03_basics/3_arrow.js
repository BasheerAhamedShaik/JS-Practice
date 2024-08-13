const user = {
    username: "Tony",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome to my world`);    // current context
        // console.log(this);  
    }
}
user.welcomeMsg()     // Tony, welcome to my world
user.username = "Stark"
user.welcomeMsg()     // Stark, welcome to my world

// ******** if we execute line 7 then we will get the following output

//  Tony, welcome to my world
// { username: 'Tony', price: 999, welcomeMsg: [Function: welcomeMsg] }
// Stark, welcome to my world
// { username: 'Stark', price: 999, welcomeMsg: [Function: welcomeMsg] }

// *************************************//

// console.log(this);     // {} (*** there is no context in the current global context. But when execute this same line in the browser, you will get "Window Object" as output because it is the global object ***)

// function hello(){
//     let uname = "natasha"
//     console.log(this.uname);
// }
// hello()                     // undefined (***we can't use 'this' directly in the function)


// const hello = function(){
//     let uname = "natasha"
//     console.log(this.uname);  // if we log 'this' we get some weired output both in this method and upper discussed method but not in arrow function. It will give you output as {}.
// }
// hello()                       // undefined


const hello = () => {
    let uname = "natasha"
    console.log(this.uname);
}
hello()                         // undefined

// **** Basic arrow function *****//

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));       // 7

const addOne = (num1, num2) => num1 + num2   // Implicit return
console.log(addOne(4,5));       // 9

const addT = (num1,num2) => (num1 + num2)   // **** This technique mostly used in React. we don't have to write 'return' while using brackets.
console.log(addT(5,6));         // 11

const hi = (num1,num2) => ({username: "Tony"})    // objects can be written this like
console.log(hi(3,4));     // { username: 'Tony' }

