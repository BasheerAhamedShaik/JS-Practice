let score = undefined
console.log(typeof score);

let scoreToNum = Number(score)
console.log(typeof scoreToNum);
console.log(scoreToNum)    // NaN when score = "33abc"(alphanum)

// "33" => 33
// "33abc" => NaN (Not a Number) ; output of console.log(scoreToNum)
// true => 1 ; false => 0
// null => 0
// undefined => NaN

let LoggedIn
let Bool = Boolean(LoggedIn)

console.log(Bool);
console.log(typeof LoggedIn);
console.log(typeof Bool);

// -infinity to +infinity (other than zero) => true ; 0 => false
// "Hi" => true
// "" => false
//    => false

let num = 33
let ToStr = String(num)

console.log(ToStr);
console.log(typeof ToStr);
