import React from "react"
class EmployeeForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            salary: "",
            email: "",
            isShow: false
        }

    }

    handleName(e) {
        console.log("event value", e.target.value)
        this.setState({ name: e.target.value })
    }

    handleAge(e) {
        this.setState({ age: e.target.value })
    }
    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handleSalary(e) {
        this.setState({ salary: e.target.value })
    }
    displayData(e){
        e.preventDefault()
        this.setState({isShow:true})
    }
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="enter name" value={this.state.name} onChange={(e) => this.handleName(e)} />
                    <label>Age</label>
                    <input type="text" placeholder="enter age" value={this.state.age} onChange={(e) => this.handleAge(e)} />
                    <label>Salary</label>
                    <input type="text" placeholder="enter salry" value={this.state.salary} onChange={(e) => this.handleSalary(e)} />
                    <label>Email</label>
                    <input type="text" placeholder="enter email" value={this.state.email} onChange={(e) => this.handleEmail(e)} />
                    <button onClick={(e)=>this.displayData(e)}>Show data</button>
                </form>
                {/* {this.state.isShow &&<div>
                    <h1>Employee Details</h1>
                    <h4>Name: {this.state.name}</h4>
                    <h4>Age: {this.state.age}</h4>
                    <h4>Email :{this.state.email}</h4>
                    <h4>Salary: {this.state.salary}</h4>
                </div>} */}
                {/* conditional rendering*/ }
                {this.state.isShow ? (<div>
                    <h1>Employee Details</h1>
                    <h4>Name: {this.state.name}</h4>
                    <h4>Age: {this.state.age}</h4>
                    <h4>Email :{this.state.email}</h4>
                    <h4>Salary: {this.state.salary}</h4>
                </div>) : null}

            </div>
        )
    }
}

export default EmployeeForm