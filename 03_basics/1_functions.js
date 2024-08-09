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

function calCartPrice(num){
    return num
}

console.log(calCartPrice(2));    // 2
