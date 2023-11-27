class Person{
    constructor(name,age){
        this.name=name;
        this.age = age
    }

    showInfo(){
        console.log("person info=")
        console.log(this.name,this.age)
    }
}

class Teacher extends Person{
    constructor(name,age,course){
        super(name,age)
        this.course = course
    }
    showInfo(){
        console.log("teacher info=")
        super.showInfo()
        // console.log(this.name,this.age)
        // console.log(this.course)
    }

}

let p1 = new Person("sameer",20)
p1.showInfo();

let t1 = new Teacher("sameer",20,"mern")
t1.showInfo();



// class User extends Person{
//     constructor(name,age,email){
//         super(name,age)
//         this.email=email;
//     }

//     showUser(){
//         console.log(this.name,this.age,this.email)
//     }
// }

// let u1 = new User("test1",20,"test1@gmail.com")
// u1.showUser();