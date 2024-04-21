class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME -> ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const ekansh = new User("Ekansh")
// console.log(ekansh.createId());

const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.logMe());
console.log(iphone.createId());