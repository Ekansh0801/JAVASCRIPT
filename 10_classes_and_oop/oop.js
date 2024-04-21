// const User = {
//     username:"Ekansh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("Got user details from databse!!");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(User.username);
// console.log(User.getUserDetails());
// console.log(this);


function User(username,logginCount,isLoggedIn){
    this.username = username
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne = new User("Ekansh",8,true)
const userTwo = new User("Swati",1,true)
console.log(userOne);
console.log(userTwo);

