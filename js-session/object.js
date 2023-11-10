let user = {
    name:"test1",
    age:20
}
 // objcet literals
console.log(user.name)
console.log(user.age)
console.log(user["name"])
let key = "name"
console.log(user[key])
for(let key in user){
    console.log(key,user[key])
}

let company = {
    name:"abc",
    address:"hyd"
}
console.log(company.name)
console.log(company.address)
