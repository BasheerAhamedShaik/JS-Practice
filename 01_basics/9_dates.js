let date = new Date()
// console.log(date);                       //  2024-08-02T14:16:48.055Z
// console.log(date.toString());            //  Fri Aug 02 2024 14:21:07 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString());        //  Fri Aug 02 2024
// console.log(date.toISOString());         //  2024-08-02T14:21:07.514Z
// console.log(date.toJSON());              //  2024-08-02T14:21:07.514Z
// console.log(date.toLocaleDateString());  //  8/2/2024
// console.log(date.toLocaleString());      //  8/2/2024, 2:21:07 PM
// console.log(date.toTimeString());        //  14:21:07 GMT+0000 (Coordinated Universal Time)

// console.log(typeof date);                // object

let mydate = new Date(2024,0,3)             // (yyyy/m/d)
console.log(mydate.toDateString());         //  Wed Jan 03 2024

let mydate1 = new Date('2024-01-03')
console.log(mydate1.toLocaleString());      // 1/3/2024, 12:00:00 AM

let mydate2 = new Date('01-03-2024');       // (mm/dd/yyyy) -> indian system
console.log(mydate1.toLocaleString());      // 1/3/2024, 12:00:00 AM



