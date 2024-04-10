//object made from constructor is singleton and object made from literals is not singleton

//singleton
//Object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name:"Ekansh",
    "full name":"Ekansh Aggarwal",
    [mySym]:"myKey1",
    age:20,
    location:"Faridabad",
    email:"ekansh@gmail.com",
    isLoggendIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "swatiaggarwal@gmail.com";
console.log(JsUser["email"]);
// Object.freeze(JsUser)
JsUser.email = "ekanshaggarwal@gmail.com";
console.log(JsUser["email"]);
 
JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting()
JsUser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]}`);
}

JsUser.greetingTwo()