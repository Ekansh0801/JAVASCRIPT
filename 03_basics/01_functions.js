
function sayMyName(){
    console.log("Ekansh");
    console.log("Aggarwal");
}

// sayMyName();

// function addTwoNumbers(num1,num2){   //arguements
//     console.log(num1 + num2); 
// }

// addTwoNumbers(3,4)   //passing parameters

function addTwoNumbers(num1,num2){   //arguements
    return num1 + num2; 
}

const result = addTwoNumbers(4,5)
// console.log(result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ekansh"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,300));


anyObject = {
    username : "Ekansh",
    price:"499"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and prices is ${anyObject.price}`)
}
handleObject(anyObject)