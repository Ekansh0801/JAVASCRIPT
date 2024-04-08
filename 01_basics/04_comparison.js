// console.log(2 > 1);
// console.log(2 >= 2);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); // it does not convert null to 0
console.log(null >= 0); // >,>= ,< these comparsion operators convert null to 0 treating as a number hence this is true 

//undefined gived false with all comparison operators

//strict check ===  => check value as well as datatype

console.log("2" === 2)

// == checks only value not data type
console.log("2" == 2);