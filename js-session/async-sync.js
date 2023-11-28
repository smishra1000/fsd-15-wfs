// console.log("hiii")
// console.log("i am fine")
// console.log("okkk")

// let a = 10;
// console.log(a)
// let b = 20;
// console.log(b)

// function listenMusic(){

// }


// function printData(){
// // taking time to print
// }



// function makeOrder(){

// }

// listenMusic();//it will execute
// printData();// it will take time
// makeOrder();// has to wait till completion ofr printData()



// console.log("1")
// setTimeout(function(){
//     console.log("2")
// },3000)
// console.log("3")


// function placeOrder(){
//     console.log("placing order")
// }

// function makePayment(){
//     setTimeout(function(){
//         console.log("payment started")
//     },3000)
// }

// function orderPlaced(){
//     console.log("order placed successfully")
// }

// function playMusic(){
//     console.log("playing music")
// }

// placeOrder();
// makePayment();
// orderPlaced();
// playMusic();


// callback, promise, async-await

// 1. callback----

// function placeOrder(){
//     console.log("placing order")
// }

// function makePayment(x){
//     setTimeout(function(){
//             console.log("payment started")
//             console.log("payment done")
//             x();
//     },3000)
// }

// function orderPlaced(){
//     console.log("order placed successfully")
// }

// placeOrder();
// makePayment(orderPlaced);

// makePayment(function(){
//     otherFunction(function(){

//     })
// })

//callback hell

// function showA(fn){
//     fn();
// }

// function showB(fn1){
// fn1()
// }

// showA(function(){
//     showB(function(){
//         console.log("hii b")
//     })
// })

// 2. promise-- pending, fullfilled, rejectd-----


// function placeOrder() {
//     console.log("placing order")
// }

// function makePayment() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("payment started")
//             console.log("payment done")
//             resolve();
//         }, 3000)
//     })

// }

// function orderPlaced() {
//     console.log("order placed successfully")
// }

// placeOrder();
// makePayment().then(function(res){
//     orderPlaced()
// }).catch(function(err){
//     console.log(err)
// })

// function sum(){
//     return new Promise(function(resolve,reject){
//         console.log("sum done")
//         resolve()
//     })
// }

// function subtract(){
//     console.log("subtract done")
// }

// sum().then(function(res){
//     subtract();
// })



// function getUsers(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("getting users")
//             resolve({name:"sameer",age:20})
//         },2000)
//     })
   
// }

// function displayUsers(){
//     console.log("display user ")
// }

// getUsers().then(function(data){
//     displayUsers();
// })

let users = [
    {
        id:1,
        name:"test1"
    },{
        id:2,
        name:"test2"
    },
    {
        id:3,
        name:"test3"
    }
]

//input id from user through prompt box

// 1> write a function with delay 3sec to delete user from array then 
// display success messge "user deleted successfully" using displayMessage function

