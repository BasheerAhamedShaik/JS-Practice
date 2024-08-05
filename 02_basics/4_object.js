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
            firstname: "Tony"
        }
    }
}
