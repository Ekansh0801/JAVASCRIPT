// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    //Do any async task
    //DB calls ,cryptographic ,network
    setTimeout(function(){
        console.log('Async function completed')
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    //Do any async task
    //DB calls ,cryptographic ,network
    setTimeout(function(){
        console.log('Async function completed')
        resolve();
    },1000)
})
.then(function(){
    console.log('Promise successfull!!');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Ekansh0801',email:'ekansh0801@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'Ekansh0801',email:'ekansh0801@gmil.com'})
        }
        else{
            reject('ERROR: something went wrong!!')
        }
    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() => {
    console.log('Promise is either resolved or rejected')
})

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'javascript',password:'123'})
        }
        else{
            reject('ERROR: JS went wrong!!')
        }
    },1000)    
})

async function consumePromiseFive(){
    try{const response = await promiseFive
    console.log(response)}
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//     const data = await response.json();

//     console.log(data);    
//   }catch(error){
//     console.log("E:", error);
//   }  
// }

// getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))