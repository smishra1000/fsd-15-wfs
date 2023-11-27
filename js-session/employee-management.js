// class Employee{
//     constructor(){
//       this.employess = []
//     }

//     addEmp(id,name,age,salary){
//         this.employess.push({name,age,salary,id})
//     }

//     deleteEmp(){
//         let id = Number(prompt("enter the id of employee"))
//         let index = this.employess.findIndex(function(item){
//             return item.id===id
//         })
//         this.employess.splice(index,1)

//     }

//     showAllEmployees(){
//         console.log(this.employess)
//     }
// }

// let e1 = new Employee();
// e1.addEmp(101,"sameer",20,2000);
// e1.addEmp(102,"sameer2",22,3000);
// e1.showAllEmployees();
// // e1.deleteEmp();
// // e1.showAllEmployees()



class Auth{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    login(){
        if(email===this.email && this.password===password){
            console.log("user logged in")
        }
    }
    
}