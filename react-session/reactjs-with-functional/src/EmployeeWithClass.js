import React from "react";

class EmployeeWithClass extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"sameer",
            comapny:"ABC",
            salary:5000,
        }
    }
    updateSalary(){
        this.setState({salary:6000})
    }
    render(){
        return(
            <div>
                <h4>Employee info using class based</h4>
                <h4>Name: {this.state.name}</h4>
                <h4>Company: {this.state.comapny}</h4>
                <h4>Salary: {this.state.salary}</h4>
                <button onClick={()=>this.updateSalary()}>Update salary</button>
            </div>
        )
    }
}

export default EmployeeWithClass