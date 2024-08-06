//const WPUser = new Object()  // singleton object
const WPUser = {}               // non-singleton object

WPUser.id = "123abc"
WPUser.name = "Stark"
WPUser.isLoggedIn = false

console.log(WPUser);         // { id: '123abc', name: 'Stark', isLoggedIn: false }

const regularUser = {
    email: "stark@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tony",
            lastname: "Stark"

        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);  // Tony

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}  // //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } // same prblm occured in array

// const obj3 = Object.assign({}, obj1, obj2)  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2}
console.log(obj3);          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// generally whenever the values from database they are like...array of objects

const user = [
    {
        id: 1,
        email: "stark@gmail.com",
    },
    {
        id: 2,
        email: "star@gmail.com",
    },
    {
        id: 3,
        email: "sta@gmail.com",
    },
]
console.log(user[1].email)     // star@gmail.com

// lets again get back to WPUser

console.log(Object.keys(WPUser));
console.log(Object.values(WPUser));
console.log(Object.entries(WPUser));

console.log(WPUser.hasOwnProperty("isLoggedIn"));    // true
console.log(WPUser.hasOwnProperty("isLogged"));      // false