// let ages = [20,40,50,60]

// console.log(ages)

// console.log(ages[0])

// for(let i = 0;i<ages.length;i=i+1){
//     console.log(ages[i])
// }

// wap to find even number from 2 to 10

// let numbers = [2,3,4,5,6,7,8,9,10]

// function findEven(){
//     for(let i=0;i<=9;i++){
//         if(numbers[i]%2===0){
//             console.log(numbers[i])
//         }
//     }
// }
//findEven();

// wap store the salary of  10 employess in one array and then find salay greter than 5000

// let salaries = [6000,2000,30000,5000,8000,9000,1000,4000,2000,6000]
// function getSalary(){
//     for(let i=0;i<salaries.length;i++){
//         if(salaries[i]>5000){
//             console.log(salaries[i])
//         }
//     }
// }

// getSalary();

// let data = [2,"sameer",40,"hyd",true]
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])
// function sum(){
//     let a = 9;
//     let b = 9
//     console.log(a+b)
// }

// function greet(){
//     console.log("hiiii")
// }

// let fnarray = [sum,greet]
// fnarray[0]()
// fnarray[1]()

// let user1 = {
//     name:"test1",
//     age:20
// }
// let user2 = {
//     name:"test2",
//     age:22
// }
// let users = [user1,user2]

// console.log(users)

// let users = [
//     {
//         name:"test1",
//         age:20
//     },
//     {
//         name:"test2",
//         age:22
//     }
// ]

// console.log(users[0].name)
// console.log(users[1].name)


// let employees = new Array("sameer","test1")
// console.log(employees)


// array methods 

// 1. length 
// let ages = [10,40,30]
// console.log(ages.length)

//2. push ----used to insert an element at the end
//  let marks = [20,40,50,60]
//  marks.push(80)
//  marks.push(10)

//  console.log(marks)

 // pop----used to remove element from the end 

//  let subjects = ["maths","c","cpp"]
//  console.log(subjects)
// let d = subjects.pop()
// console.log(d)

// 4. unshift----use to insert at begning
// let numbers = [10,20,30]
// console.log(numbers)
// numbers.unshift(100)
// console.log(numbers)

// 5. shift---used to remove from begning

// let colors = ["red","blue",'green']
// console.log(colors)
// colors.shift()
// console.log(colors)

//6 . indexOf ----it will check element exist or not---it will return >-1 if not it will return -1
// let emplyees = ["test1","test2","test3","test1"]
// let result = emplyees.indexOf("test1")
// console.log(result)

/// 7 lastIndexof

// let lastIndex = emplyees.lastIndexOf("test1")
// console.log(lastIndex)


// 8 splice ----use to remove elemnt from array 

// let companies = ["google","carrerx","abc"]
// console.log(companies)
// companies.splice(1,2)
// console.log(companies)

// wap to delete sameer from names array 
// let names = ["abc","test1","test3","sameer"]
// console.log(names)
// let index = names.indexOf("sameer")
// names.splice(index,1)
// console.log(names)

// wap to delete user which has email="test1@gmail.com" from users array

let users = [
   
    {
        email:"test2@gmail.com"
    },
    {
        email:"test1@gmail.com"
    },
    {
        email:"test3@gmail.com"
    },
   
]

// let users = ["test1@gmail.com","test2@gmail.com","test3@gmail.com"]

// let result = users.indexOf("test1@gmail.com")
// console.log(result)
// users.splice(result,1)
// console.log(users)
// let index = 0
// for(let i = 0;i<users.length;i++){
//     if(users[i].email==="test1@gmail.com"){
//         index = i
//     }
// }
// users.splice(index,1)
// console.log(users)

// 

let courses = [
    {
        name:"MERN",
        trainer:"Sameer Mishra"
    },
    {
        name:"Pyhton",
        trainer:"test1"
    },
    {
        name:"JAVA",
        trainer:"test2"
    },
    {
        name:"MERN",
        trainer:"Sameer Mishra"
    }
]

for(let i=0;i<courses.length;i++){
    if(courses[i].name==="MERN"){
        console.log(courses[i])
    }
}

let foundCourse = courses.findIndex(function(course){
    return course.name==="MERN"
})

console.log(foundCourse)


// concat ---use to add two array 

// let a1 = [1,2,3,4]
// let a2 = [5,6,7]
// console.log(a1.concat(a2))

// find findeIndex

// let employess = [
//     {
//         name:"test1",
//         age:20,
//         slary:3000,
//     },
//     {
//         name:"test2",
//         age:22,
//         slary:4000,
//     },
//     {
//         name:"test2",
//         age:22,
//         slary:1000,
//     }
// ]

// let result = employess.find(function(employee){
//     return employee.name==="test1"
// })

// console.log(result)









