const arr = [0,1,2,3,4,5]
console.log(arr);         // [ 0, 1, 2, 3, 4 ]

const arr1 = new Array(0,1,2,3,4,5)   // another way of array declaration
console.log(arr1[0]);               // 0 (accessing elements of an array)

//********Js arraycopy-operations make shallow copies rather than deep copies*******//

// methods

// arr.push(6)
// arr.push(7)
// console.log(arr);

// arr.unshift(9)
// console.log(arr);   // adds 9 in the begining of an array

// arr.shift()
// console.log(arr);   // removes starting element
// arr.shift()
// arr.shift()
// console.log(arr);

console.log(arr1.includes(3))     // true
console.log(arr1.indexOf(3));     // 3
console.log(arr1.indexOf(9));     // -1 (since -1 is not there in the array)

const newArr = arr1.join('?')        // converts into string we can add desired separator or else by default it is treated as comma
console.log(arr1);
console.log(newArr);              // 0,1,2,3,4,5
console.log(typeof newArr);       // string

console.log("A ",arr);            // A  [ 0, 1, 2, 3, 4, 5 ]
const arr2 = arr.slice(1,3);      
console.log(arr2);                // [ 1, 2 ]
console.log("B ",arr);            // B  [ 0, 1, 2, 3, 4, 5 ] ( no change in the array)

const arr3 = arr.splice(1,3); 
console.log(arr3);                // [ 1, 2, 3 ] ( This is not just including 3rd indexing but it also manipulates the array)
console.log("C ",arr);            // C [ 0, 4, 5 ]












       

