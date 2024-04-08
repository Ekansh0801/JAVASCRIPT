let score = "33abc"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let pcore = null
// console.log(typeof pcore);
// console.log(typeof(pcore));

let valueInNum = Number(pcore)
// console.log(typeof valueInNum);
// console.log(valueInNum);

let dcore = undefined
// console.log(typeof dcore);
// console.log(typeof(dcore));

let valueInN = Number(pcore)
// console.log(typeof valueInN);
// console.log(valueInN);

//"33" => 33
//"33abc" =>NaN
//true => 1; false => 0


let loggedIn = 1
let booleanIsLoggedIn = Boolean(loggedIn)
// console.log(booleanIsLoggedIn);

let lame = "hihi"
let booleanLame = Boolean(lame)
// console.log(booleanLame);
//true but if empty string then output false

//1 => true; 0 => false
//"nonempty" => true
//"" => false

let num = 33
let str = String(num)
// console.log(str)
// console.log(typeof str)



// ************************************************** Operations ****************************************************************


let value = 3
let negValue = -value
console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Ekansh"
let str2 = "Swati"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2+ 2);
console.log(1 + 2 + "2");

console.log(true);

let num1,num2,num3
num1 = num2 = num3 = 2 + 2 //this code is not preffered due to readibility

let gameCounter = 100
gameCounter++
console.log(gameCounter);