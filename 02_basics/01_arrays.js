//arrays

const myArr = [0,1,2,3,4,5,"Ekansh","Swati"]
const myHeros = ["Spiderman","Batman","Ironman"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[7]);
// myArr.push(8);
// console.log(myArr);
// myArr.push(9);
// console.log(myArr);
// myArr.pop();

// myArr.unshift(9);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf("Swati"));
console.log(myArr.indexOf(10));

const joiny = myArr.join('_')
console.log(joiny);

//slice
A = [0,1,2,3,4,5,6]
console.log("A",A);
B = A.slice(1,3)
console.log("B",B);
console.log("A",A);

//splice
x = [0,1,2,3,4,5,6]
console.log("x",x);
y = x.splice(1,3)
console.log("y",y);
console.log("x",x);