// object creation in js
//1. using object literal--
// let user1 = {
//     name: "test1",
//     age: 20,
//     getInfo:function(){
//         console.log("userinfo")
//     }
// }

// let user2 = {
//     name: "test2",
//     age: 30
// }


// 2. using constructor function/ using new keyword

// function User(x, y) {
//     this.name = x
//     this.age = y
// }

// let u1 = new User("test1", 20); //{}

// console.log(u1)

// let u2 = new User("test2", 30);///{name:test1,age:20}

// console.log(u2)

// function Employee(name, age, mobile) {
//     this.empName = name;
//     this.empAge = age;
//     this.empMob = mobile;

//     this.getInfo = function(){
//         console.log("emp info====")
//         console.log(this.empAge)
//         console.log(this.empName)
//     }
// }

// let e1 = new Employee("sameer", 20, "646464");
// console.log(e1)
// e1.getInfo();

// let e2 = new Employee("amit",33,44444)

// console.log(e2)

// function User(){
//    this.name="test1";
//    this.email="test1@gmail.com"
// }

// // let u1 = User();
// // console.log(u1)

// let u2 = new User()
// console.log(u2)

// 3. using object.create 

// let comp = {
//     name:"google",
//     address:"hyd"
// }

// let comp2 = Object.create(comp)

// console.log(comp2)

// let user1 = {
//     name:"test1"
// }

// let user2 = Object.create(user1)
// user2.age=20;

// console.log(user1.age)

// 4th using class object---  oops 

// class Student {
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }

//     getInfo(){
//         console.log(this.name,this.age)
//     }
// }

//

// function Student(name,age){
//     this.name=name;
//     this.age=age
// }

// let s1 = new Student("sameer",20)

// s1.getInfo();


// let s2 = new Student("khusi",21)

// console.log(s1)

// console.log(s2)

class Airthmatic{
    constructor(n){
        this.n=n
    }

    checkEven(){
        if(this.n%2===0){
            console.log("even number")
        }else{
            console.log("not an even number")
        }
    }

    checkPositiveNegative(){
        if(this.n<0){
            console.log("number is negative")
        }else{
            console.log("number is positive")
        }
    }
}

let n1 = new Airthmatic(10)
n1.checkEven();
n1.checkPositiveNegative();

