// const userMail = "ek@nsh.ai"
// const userMail = ""
// const userMail = []

//  if(userMail){
//     console.log("Got User Mail");
//  }
//  else{
//     console.log(`Don't have User Mail`);
//  }

//Falsy values

//    false, 0, -0, BigInt 0n, "", null, undefined, NaN

//rest all truthy values (for eg)

// "0", 'false', " ", [], {}, function(){} -> surprising values


// console.log(false == 0);

// console.log(false == '');

// console.log('' == 0);

// Nullish coalescing operator(??) : null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10

// console.log(val1);

//Terniary Operator

//condition ? true : false

const icedTeaPrice = 100
icedTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
