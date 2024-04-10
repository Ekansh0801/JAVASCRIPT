const tinderUser = new Object()
// cnsole.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggesIn = false

// console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ekansh",
            lastname:"Aggarwal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2) // empty object passing is optional but it ensures all objects are combined
// console.log(obj3);

const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"d@gmail.com"
    },
    {
        id:5,
        email:"e@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggesIn"));

const course = {
    coursename:"js course",
    price:"999",
    courseInstrctor:"hitesh"
}

const {courseInstrctor:instructor} = course

console.log(instructor);


// {
//     "name":"ekansh",
//     "email":"ekanshaggarwal@gmail.com",
//     "age":20

// }
 