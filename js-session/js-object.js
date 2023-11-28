// object literal 

///1 . 
// let user = {
//     name:"test1",
//     email:"test1@gmail.com",
//     isValid:true,
//     ages:[20,30,40],
//     show:function(){
//         console.log("hi i am show function")
//     }
// }
// console.log(user.name)

// console.log(user.email)
// let key = "age";

// user[key] = 20

// console.log(user)
// user.show()

// var a = 20;
// console.log(a,window.a,this.a)

// this===window

// function show(){
//     console.log("hiii")
// }

// var user = {
//     name:"test1",
//     show:function(){
//         console.log("hii inside user obj")
//     }
// }

// show();
// window.show();
// this.show();

// user.show();

// 1. At global level this ===window---this is an object in "js"

//2. 


// function show(){
//     console.log(this)//window
// }

// show()
// window.show()

// let user = {
//     name:"test1",
//     show:function(){
//         console.log(this)
//         console.log("hii")
//     }
// }

// //2. inside method value of this will equal to owner of method
// user.show();

let employee = {
    name:"test1",
    age:30,
    email:"test1@gmail.com",
    // showName:function(){
    //     console.log(this.name)
    //     console.log(employee.name)
    // },
    showInfo:function(){
        console.log(this.name,this.age,this.email)
        // console.log(this.age)
        // console.log(this.email)
    
    }
}

employee.showInfo();

// scope in js -----
// ----  function scope/local scope ----global scope ----block scope

// "this"---- 
// object createion---object .crreate assign new  constructor function 
// call apply bind---
// oops / encapsulation data abstratcion class object inheritance 
// es6 
// async js 




