const accountId = 12345    // not changable
let accountEmail = "abc@gmail.com"  // good practice and value can be changed
var accountPass = "Sha@9494"    // prefer not to use bcoz issue in block scope and function scope
let accountState                // undefined variable

accountCity = "delhi"       // not allowed,always declare a variable using 'let'

//let accountId = 123         // error due to accountId is already declared

//console.log(accountId);

console.log(accountId);  // printing one variable

console.log(accountCity);

console.table([accountId,accountEmail,accountPass,accountCity,accountState])