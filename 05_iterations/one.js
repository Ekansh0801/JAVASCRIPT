//for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

//NESTED LOOPS

// for(let i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         console.log(`i -> ${i}, j -> ${j}`);
//     }
// }

// let myArray = ["flash","batman","superman"]

// for(let index = 0; index < myArray.length; index++){
//     const element = myArray[index];
//     console.log(element);
// }

//break and continue
for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}

for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}
