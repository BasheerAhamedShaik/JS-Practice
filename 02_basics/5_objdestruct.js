const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);     // Hitesh

const {courseInstructor} = course  // de-structure
console.log(courseInstructor);      // Hitesh

const {courseInstructor: instructor} = course
console.log(instructor);            // Hitesh

//***arrays can also be de-structured ****//

//*****intro to JSON API*****//   (Javascript object notation)
// API is nothing but you will get some values from backend. now how will you write? Earlier values comes in Xml structure(complex) but now values will come in JSON
// now let us look how JSON looks

{
    "name": "stark",
    "course": "JS",
    "price": "free"
}

// this is how we can get values in JSON

// we will use fetch method and convert values into objects and arrays(if given) and take values
// we get API in the form of arrays also

[
    {},
    {},
    {}
]

// one of the famous API is https://randomuser.me/

// some tools are there to read and understand API such as https://jsonformatter.org/