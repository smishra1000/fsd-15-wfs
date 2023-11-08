// let a = 6;
// let b = 7;
// console.log(a+b)

// let x=7;
// let y=9;
// console.log(x+y)

// function add() {
//     let a = Number(prompt("enter first number"))
//     let b = Number(prompt("enter second number"))
//     console.log(`sum of 2 number=${a+b}`)
// }

// add();
// add();

// function greet(msg){
//     console.log("hello", msg)
// }

// greet("good morning")
// greet("good evening")
// greet("good afternoon")

// function add(a,b){
//     console.log(a+b)
// }

// add(2,3)

// add(10,20)

// wap to cehck number is even or odd

// function checkEvenOrOdd(n){
//     if(n%2===0){
//         console.log("numbers is even")
//     }else{
//         console.log("number is odd")
//     }
// }

// checkEvenOrOdd(10);
// checkEvenOrOdd(40);
// checkEvenOrOdd(67);


// function add(a,b){
//     let c = a+b;
//     return c;
//     console.log("hello")
// }

// let result = add(10,20)

// console.log(result)


// function greet(){
//     console.log('hii i am fine')
// }


// function dummy(param){
//     console.log(param)
//     param()
// }
// dummy(10); // with number as an argument
// dummy("hiii")
// dummy(true)

// dummy([10,20,30])

// dummy({name:"test1",age:20})
// dummy(greet)



// function orderNow(a){
//     console.log("palcing order")
//     console.log(a)
//     a()
// }

// function payNow(){
//     console.log("paying now")
// }

// orderNow(payNow)

// function greet(){
//     console.log("hiiiii")
// }

// function dummy(){
//     return greet
// }
// let result = dummy()
// console.log(result())

// add 2 number 

// function add(){
//     //console.log(arguments)
//     console.log(arguments[0],arguments[1])
// }

// add(10,20,30)
// add(100,200,300,400,500)

// function registration(name,phone,age,collegeName="Nit Raipur"){
//     console.log(name,age,phone,collegeName)

// }

// registration("test1",12222,30)
// registration("test2",22222,32,"kmit")

function CheckEven(){
    let n = Number(prompt("enter a number"));
    if(n%2===0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}

CheckEven();