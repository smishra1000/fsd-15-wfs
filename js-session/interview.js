

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

// let x = 5;
// let y = "5"
// console.log(x==y);//
// console.log(x===y);//

//q. 6. 
// var p=100;
// var p=200;
// console.log(p)

//q. 7 
//var d =undefined
// console.log(d)
// var d = 500;
// console.log(d)

//Question 8 

let users = [
    {
        id:1,
        name:"test1",
        company:"ABC"
    },
    {
        id:2,
        name:"test2",
        company:"DEF"
    },
    {
        id:3,
        name:"test3",
        company:"ABC"
    },
    {
        id:4,
        name:"test4",
        company:"ABC"
    },
    {
        id:5,
        name:"test5",
        company:"DEF"
    },
    {
        id:5,
        name:"test6",
        company:"DEF"
    }
]

// {
//     "ABC":[{
//         id:1,
//         name:"test1",
//         company:"ABC"
//     },{
//         id:4,
//         name:"test4",
//         company:"ABC"
//     },{
//         id:3,
//         name:"test3",
//         company:"ABC"
//     }],
//     "DEF":[{
//         id:5,
//         name:"test5",
//         company:"DEF"
//     },{
//         id:2,
//         name:"test2",
//         company:"DEF"
//     }]
// }

// function groupDataByKey(data,groupKey){
//     let resultObj = {}
//     for(let i=0;i<data.length;i++){
//         let obj = data[i];
//         let key = obj[groupKey]
//         if(!resultObj[key]){   
//             resultObj[key] = []
//         }
    
//         resultObj[key].push(obj)
//     }
//     return resultObj;
// }

// let finalData = groupDataByKey(users,"company")
// let finalData2 = groupDataByKey(users,"id")
// console.log(finalData2)

//Question . 9

function startProgress(){
    let increment = 0
    let pbr1 = document.getElementById("progress");
    let progInterval = setInterval(function(){
        if(increment===100){
            clearInterval(progInterval)
        }else{
            increment = increment +10
            pbr1.style.width = increment+'%';
        }
    },1000)

}

function getusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
}

getusers();
console.log("hii got users")



// js--

// hositing
// scoping 
// clousre
// promise async await callback 
// object 
// this call apply bind 
// map filter reduce foreach 
// array methods 
// objcet --create,assign keys,values,entries,
// es6--class object inhertaince,
// spread
// rest 
// let const var 
// constructor function 
// object creation in js 
// localstorage,session storage
// cookies
// dom---manipulation 


