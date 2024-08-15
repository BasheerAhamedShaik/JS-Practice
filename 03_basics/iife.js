// Immediately Invoke Function Expressions (IIFE)

// to avoid global scope pollution we use iife 

(function db(){
    // named IIFE
    console.log('DataBase connected');   // DataBase connected
})();                                   // we need to give ; implicitly. This is a must when we are having more than one iife, beacuse to know the context


( () => {                           // arrow function without name
    console.log('DB connected');        // DB Connected
})();

( (name) => {                           // arrow function without name
    console.log(`Hi ${name}`);          // Hi Stark
})('Stark')    