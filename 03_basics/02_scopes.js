

if(true){
    let a = 10
    const b=  20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ekansh"
    function two(){
        const website = "web"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

console.log(addone(5))

function addone(num){
    return num + 1
}

// console.log(addtwo())

const addtwo = function addtwo(num){
    return num + 2
}