const accountId = 144553
let accountEmail = "ekanshaggarwal11103@gmail.com"
var accountPassword = "080103"
accountCity = "Faridabad"
let accountState
// accountId = 22   //updating const variable not allowed

console.log(accountId)

accountEmail = "ekanshaggarwal01112003@gmail.com"
accountPassword = "010803"
accountCity = "Bengaluru"

/*
  Prefer not to use var 
  because of issue in block scope and fuctional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
