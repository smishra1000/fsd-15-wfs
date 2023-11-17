// "this" in js


// var a = 60;
// console.log(a)
// console.log(window.a)
// console.log(this.a)
// at global level this refers to window----

// function show(){
//     console.log("hii i am here",this)
// }

// show();
// window.show();
// this.show();

// 2nd rules--- inside method  this refers to owner of the method---

// var user = {
//     name:"test1",
//     show:function(){
//         console.log("hiii i am inside object",this)
//     }
// }

// user.show();

// function parent(){
//     console.log(this);//window
//     function child(){
//         console.log(this)
//     }
//     child();
// }

// parent();

let user1 = {
    name:"test1",
    show:function(){
        console.log(this)
    }
}

user1.show();

let user2 = {
    name:"test2",
    show:function(){
        console.log(this)
    }
}

user2.show();


