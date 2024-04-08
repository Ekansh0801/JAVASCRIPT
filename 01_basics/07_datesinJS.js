//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

let dateObj = new Date(2024,3,8)
// console.log(dateObj.toDateString());

let daty = new Date("2024-04-08")
// console.log(daty.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

console.log(Math.floor((Date.now() / 1000)));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long",
})