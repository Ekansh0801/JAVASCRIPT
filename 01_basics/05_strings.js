const name = "Ekansh"
const repCount = 10

// console.log(name + repCount + " Value"); // outdated method

console.log(`Hello my name is ${name} and my repo count is ${repCount}`); // use backticks

let gameName = new String('ABCDEFGHIJKL')
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('G'));

const newString = gameName.substring(0,4); //last index excuded
console.log(newString);

const anotherString = gameName.slice(-3,2) // slice can use negative arguements while substring only uses positive arguements
console.log(anotherString);

const stringOne = "  Ekansh  "
console.log(stringOne);
console.log(stringOne.trim());

const userName = "Ekansh Aggarwal"
console.log(userName.replace(' ','@')) // it does not change the original string 
console.log(userName.includes("Ekansh"));

let hu = userName.split(' ')
console.log(hu);
console.log(typeof hu);