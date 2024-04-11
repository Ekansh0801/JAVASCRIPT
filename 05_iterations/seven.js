const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//map

// const newNums = myNumbers.map((num) => {
//     return num + 10
// })

//chaining
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
// console.log(newNums);


//Reduce

const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval) =>{
    console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval
},0) //declae initial value here we passed 0

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce((acc,currObj) => {
   return currObj.price + acc
},0)

console.log(total);