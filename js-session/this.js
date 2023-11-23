// let user1 = {
//     name:"test1",
//     age:20,
// }

// let user2 = {
//     name:"test2",
//     age:22,
// }

// function printName(){
//     console.log(this);// refres to window
//     console.log(this.age)
// }

// printName()


// user1.printName()

// function sayHi(){
//     console.log("saying hiiiii")
// }

// sayHi();
// sayHi.call();
// sayHi.apply();
// let newSayHi = sayHi.bind();
// newSayHi()


// -------call apply bind------

let emp1 = {
    name:"test1emp",
    age:20,
    email:"test1@emp1.com",
    showInfo:function(){
        console.log(this)
    }
}

let emp2 = {
    name:"test2emp",
    age:22,
    email:"test2@emp2.com",
}

let emp3 = {
    name:"test3emp",
    age:23,
    email:"test3@emp3.com",
}

// emp1.showInfo();
// emp2.showInfo();
// emp3.showInfo();

// emp1.showInfo()

// emp1.showInfo.call(emp2)
// emp1.showInfo.apply(emp2);

// emp1.showInfo.call(emp3)
// emp1.showInfo.apply(emp3)

// in case of bind first it will take the borrow/refernce of that function then in next it will execute

// let takenFn = emp1.showInfo.bind(emp1)
// takenFn();

//using call apply bind you can execute function along with you can pass dynamic this---conetxt



// let user1 = {
//     name:"test1",
//     greet:function(msg){
//         console.log(this.name,msg)
//     }
// }

// let user2 = {
//     name:"test2",
// }

// let user3 = {
//     name:"test3",
// }

//
// user1.greet("good morning");
// user1.greet.call(user2,"good morning")
// user1.greet.apply(user2,["good morning"])

// let fnnew = user1.greet.bind(user2)
// fnnew("good morning")

// function clousre----

function sayHi(){
    console.log("hiiii")
    let a = 10;
    console.log(a)


    return function sayHello(){
        console.log("helllo")
        console.log(a)
    }
}

let result = sayHi()
console.log(result())







