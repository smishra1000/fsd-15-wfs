

// Important one
// var age = 100;
// var name="test1"
// let user = {
//     name:"sameer",
//     age:50,
//     showName:function(){
//         console.log(this.name);//sameer
//         console.log(this.age);//50
//     },
//     showName2:()=>{
//         console.log(this.name)
//     }
// }

// user.showName();
// user.showName2();

// Object,this call apply bind -----hositing scoping , how js works -



// 2. 

// console.log("1")
// console.log("2")
// console.log("3")

// console.log("1")

// setTimeout(function(){
//     console.log("2")
// },0)

// console.log("3")


// 3 
// for(let i=0;i<4;i++){
//     console.log(i);//0123
// }
// console.log("here",i);//error

// for(var j=0;j<4;j++){
//     console.log(j);//0123
// }
// console.log("here2",j);//4

// 4. 

// function greet2(){
//     console.log(this) ;//Window
// }

// let greet = ()=>{
//     console.log(this);//Window
// }

// greet();
// greet2();

//5 

let x = 5;
let y = "5"
console.log(x==y);//
console.log(x===y);//

//q. 6. 
var p=100;
var p=200;
console.log(p)

//q. 7 
//var d =undefined
console.log(d)
var d = 500;
console.log(d)