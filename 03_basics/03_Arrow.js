const user = {
    username:"Ekansh",
    price:999,

    welcomemessage :function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
user.username = "sam"
// user.welcomemessage()

// function chai(){
//     const username = "Ekansh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "ekansh"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,3));

// const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(3,4));

const addTwo = (num1,num2) => ({username:"Ekansh"})

console.log(addTwo(3,4));
