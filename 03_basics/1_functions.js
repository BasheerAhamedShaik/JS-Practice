function Myname(){
    console.log("s");
    console.log("t");
    console.log("a");
    console.log("r");
    console.log("k");
}
//Myname   // reference
//Myname() // execution

function addTwo(num1, num2){     // num1 and num2 are called Parameters
    console.log(num1+num2);
}
//addTwo()     // NaN
// addTwo(3,4)    // 7               // 3,4 are called arguments
// addTwo(3,"4")  // 34 (string)
// addTwo(3,"a")  // 3a (string)
// addTwo(3,null)  // 3 (string)

const res = addTwo(3,5)             // 8
console.log("Result: ", res);       // Result:  undefined

function addTwoNum(num1, num2){     // num1 and num2 are called Parameters
    return num1 + num2
}

console.log(addTwoNum());          // NaN
console.log(addTwoNum(5,6));       // 11
addTwoNum(5,6);                    // we get nothing. here it is just returning but not printing

function loginUserMessage(username = "Tony"){
    if(!username){
        console.log("Please Enter a Username");
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("stark"));   // stark just logged in
console.log(loginUserMessage());          // undefined just logged in
console.log(loginUserMessage(""));        //  just logged in
console.log(loginUserMessage("stark"));   // this overwrites Tony


// Functions with objects and arrays

function calCartPrice(...num){   // rest operator
    return num
}

console.log(calCartPrice(200, 300, 500));        // [ 200, 300, 500 ]

function calCartPrice(val1, val2, ...num){       // rest operator
    return num
}

console.log(calCartPrice(200, 300, 500, 1000));  // [ 500, 1000 ]

const user = {
    id: 13,
    desig: "Engineer"
}

function handleObject(anyobject){
    console.log(`UserId is ${anyobject.id} and Designation is ${anyobject.desig}`);
}

// handleObject(user)       // UserId is 13 and Designation is Engineer

// *** here in case suppose that in place of anyobject.id if we write anyobject.name then output will be 
// "undefined is 13 and Designation is Engineer" so this is the drawback of JS we need to check by writing more code

// instead of creating the object separetly we can pass the object directly also

handleObject({
    id:12,
    desig: "IT"        // UserId is 12 and Designation is IT
})

// ** Arrays
const myArray = [2,3,4,5,6]

function one(getArray){
    return getArray[0]
}

console.log(one(myArray));          // 2
console.log(one([7,8,9,10,11]));    // 7

