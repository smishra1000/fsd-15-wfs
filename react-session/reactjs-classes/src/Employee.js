import React from "react";

class Employee extends React.Component{
    constructor(){
        super()
        this.state={
            name:"test1",
            age:"20",
            salary:30000,
            companyName:"ABC compnay"
        }
    }

    render(){
        return(
            <div>
                <h4>Employee info</h4>
                <div style={{height:'300px',width:'300px',border:'2px solid red',padding:'5px'}}>
                    <h4>Name:{this.state.name}</h4>
                    <h4>Age: {this.state.age}</h4>
                    <h4>salary : {this.state.salary}</h4>
                    <h4>Compnay: {this.state.companyName}</h4>
                </div>
            </div>
        )
    }
}

export default Employee