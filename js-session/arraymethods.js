let array = [20,30,40,50]

//find ---
//wap to search 40

let foundElement = array.find(function(currEle,index,array){
   return currEle===40
})
let found = array.findIndex(function(currEle,index,array){
    return currEle===40
})

console.log(found)

let users = [
    {
        id:101,
        name:"test"
    },
    {
        id:102,
        name:"test2"
    },
    {
        id:103,
        name:"test3"
    },
    {
        id:104,
        name:"test4"
    }
]
// wap to find user which has id=103
// let foundUser = users.find(function(curr,index,arr){
//     return curr.id===103
// })
// console.log(foundUser)

// let foundIndex = users.findIndex(function(curr,index,arr){
//     return curr.id===103
// })

// console.log(foundIndex)

//filter ----filter function is used to get filtered element from array based on condition

// let numbers = [10,20,30,40,50,60,70,11,21,33,45]
// let newArry = numbers.filter(function(curr,index,arr){
//     return curr%2===0
// })

// console.log(numbers)
// console.log(newArry)

// let employees = [
//     {
//         id:101,
//         salary:2000,
//         email:"test1@gmail.com"
//     },
//     {
//         id:102,
//         salary:4000,
//         email:"test2@gmail.com"
//     },
//     {
//         id:103,
//         salary:5000,
//         email:"test3@gmail.com"
//     },
//     {
//         id:104,
//         salary:4000,
//         email:"test4@gmail.com"
//     },
//     {
//         id:105,
//         salary:2000,
//         email:"test5@gmail.com"
//     }
// ]
//wap to get only those employee which has salary=2000

// let filteredEmployees = employees.filter(function(curr,index,arr){
//     return curr.salary===2000
// })

// console.log(filteredEmployees)


// map----map function is used to transform the array elements and return new array

// let ages = [10,20,30,40]

// let doubleAges = ages.map(function(curr,index,arr){
//     return curr*2
// })
// console.log(doubleAges)

// let doubleAges = []
// for(let i = 0;i<ages.length;i++){
//     doubleAges.push(ages[i]*2)
// }
// console.log(doubleAges)

// Reduced ----reduced the array value--into one

// let numbers = [10,20,30,40,50]

// let sum = numbers.reduce(function(acc,curr,index,arr){
//     console.log(acc,curr,index,arr)
//     return acc+curr
// },0)

// console.log(sum)

let employees = [
    {
        id:101,
        name:"test1",
        address:"hyd"
    },
    {
        id:102,
        name:"test2",
        address:"hyd"
    },
    {
        id:103,
        name:"test3",
        address:"hyd"
    },
    {
        id:104,
        name:"test4",
        address:"hyd"
    }
]
console.log(employees)
// wap to update on employee which has id=103 with new details: address:Blr

let newArray = employees.map(function(curr,index,arr){
    if(curr.id===103){
        curr.address="Blr"
        return curr
    }else{
        return curr;
    }
})

console.log("after chnaging address employees=",newArray)