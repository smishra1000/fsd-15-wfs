// class Person{
//     constructor(name){
//         this.name=name
//     }
// }

// class Teacher extends Person{
//     constructor(name,course){
//         super(name)
//         this.course = course
//     }
// }

// class Company extends Teacher{
//     constructor(name,course,companyName){
//         super(name,course)
//         this.companyName = companyName
//     }

//     showInfo(){
//         console.log(this.name)
//         console.log(this.course)
//         console.log(this.companyName)
//     }
// }

// let c1 = new Company("sameer","MERN","ABC COMP")

// c1.showInfo();

// 1>Create player class add name,age, country 
// 2>create Batsman which will contain total run total match
// 3>create bowler class which will contain toltal wickets, match 
//  * calculate average run by batsman 
//  * calculate average of bowler

class Player{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country
    }
}

class Batsman extends Player{
    constructor(name,age,country,totalRun,totalMatch){
        super(name,age,country)
        this.totalRun = totalRun;
        this.totalMatch = totalMatch
    }
    calculateAverage(){
        console.log(this.totalRun/this.totalMatch)
    }
    showInfo(){
        console.log("player info-------")
        console.log("name=",this.name)
        console.log("age=",this.age)
        console.log("country=",this.country)
        console.log("totalRun=",this.totalRun)
        console.log("match palyed=",this.totalMatch)
    }
}

let v1 = new Batsman("Virat",20,"india",10000,100)
v1.calculateAverage()
v1.showInfo();

