// function getUsers(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({id:101,name:"sameer"})
//         },3000)
//     })
// }


// let result = getUsers();

// result.then(function(data){
//     console.log("resolved data=",data)
// }).catch(function(err){
//     console.log("rejected=",err)
// })

// async function greet(){
//     return "good morning"
// }

// let r = greet();
// console.log(r)

// r.then(function(data){
//     console.log(data)
// })

// async function start(){
//     let r  = await greet()
//     console.log("hello")
//     console.log(r)
// }

// start()

// function getUsers(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve({id:101,name:"sameer"})
//         },3000)
//     })
// }

// async function getUsers2(){
//     return {id:102,name:"sameer2"}
// }

// let x1 = getUsers();
// let x2 = getUsers2();
// console.log(x1,x2)

// x1.then(function(data){
//     console.log(data)
// })

// x2.then(function(data){
//     console.log(data)
// })

// async function callX1x2(){
//     let data = await getUsers();
//     let data2 = await getUsers2()
//     console.log(data,data2)
// }

// callX1x2();



// first getall usres then get by id 

// let users = [
//     {
//         id:101,
//         name:"sameer"
//     },
//     {
//         id:102,
//         name:"sameer2"
//     },
//     {
//         id:103,
//         name:"sameer3"
//     }
// ]


// function getUsers(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(users)
//         },3000)
//     })
// }

// function getUserById(){
//     let id = Number(prompt("enter id for user"))
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//            let user = users.find(function(item){
//             return item.id===id
//            })
//            resolve(user)
//         },3000)
//     })
// }

// getUsers().then(function(data){
//     // get user by id
//     getUserById().then(function(result){
//         console.log("get user by id done after get users",result)
//     })
// })