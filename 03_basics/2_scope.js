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
    // console.log(platform);            // first error is encountered here. Because we can't access the child function variable outside
    
    two()
}
one()         // Stark