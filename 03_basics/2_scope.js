var c = 300
let a = 100
// whatever we write values in block scope that can't be available outside and viceversa is possible

if(true){             // outside of this if scope(block scope) is called Global scope
    let a = 10
    const b = 20
    var c = 30        // or c=30
}

// console.log(a);  // ReferenceError: a is not defined
// console.log(b);  // ReferenceError: b is not defined
console.log(c);     // 30 ( this is the problem with var) if we declare again another value of c also it will print 30

console.log(a);     // 100


// ***************** Scope Level ***************** //

function one(){
    const uName = "Stark"

    function two(){
        const platform = "Youtube"
        console.log(uName);
    }
    // console.log(platform);       // first error is encountered here. Because we can't access the child function variable outside
    
    two()
}
one()         // Stark

if(true){
    const u2 = "Tony"
    if(true){
        const p2 = "Twitter"
        console.log(u2 + p2);
    }
    // console.log(p2);        // first error is encountered here
}
// console.log(u2);        // here you can't access the variable outside the scope of "if"



// *********************** Declaring functions methods ****************** //


console.log(addOne(3))    // we can call the function before declaration also for this type of declaration

function addOne(num){
    return num + 1
}

// addOne(3)

// console.log(addTwo(6))   // ReferenceError: Cannot access 'addTwo' before initialization. Because here we are declaring a function and holding it in the variable("Hoisting")

const addTwo = function(num){
    return num+2
}

// addTwo(6)