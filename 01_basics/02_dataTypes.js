"use strict"; //treat all JS code as newer version

// alert(3 + 3) // We are using nodeJS not browser

console.log(3
     +
      3) // code readibility should be high so avoid this and write code neatly

console.log('Ekansh Swati')      


let name = "Ekansh"
let age = 20
let isLoggedIn = false

//number => 2 to the power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => unique

//object =>

console.log(typeof undefined) // undefined
console.log(typeof null); //object


//Primitive data types => 7 types => String,Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const LoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 9782942874294248492833934292n
console.log(bigNumber);


//Reference(Non Primitive) => Arrays,Objects,Functions

//arrays
const heros = ["spiderman","batman","ironman"]

//objects

let obj = {
    name:"Ekansh",
    age:20,
}

const myFunction = function(){
    console.log('Hello World');
}

console.table([typeof heros,typeof obj ,typeof myFunction]);

// ***************************************************** Memory *******************************************************************

//Stack(Primitive) //Heap(Non Primitive)

let userName = "ekanshaggarwaldotcom"
let anotherName = userName            //copy is passed so any change it doesntg change original value
anotherName = "swatiaggarwaldotcom"
console.log(anotherName);
console.log(userName);

let userOne = {
    email:"userone@gmail.com",
    upi:"userone@hd"
}

let userTwo = userOne   // Reference to original one 
userTwo.email = "userofficial@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);