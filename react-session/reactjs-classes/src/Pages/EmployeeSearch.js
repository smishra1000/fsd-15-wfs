import React from "react"
const employees = [
    {
        id: 1,
        age: 20,
        name: "test1",
        email: "test1@gmail.com",
        address:"Patna",
        profile:"https://knorish-asset-cdn.azureedge.net/knorish-static-assets/images/v1/livesession/livesession-2.png"
    },
    {
        id: 2,
        age: 20,
        name: "test2",
        email: "test1@gmail.com",
        address:"Raipur",
        profile:"https://knorish-asset-cdn.azureedge.net/knorish-static-assets/images/v1/livesession/livesession-2.png"
    },
    {
        id: 3,
        age: 23,
        name: "test3",
        email: "test3@gmail.com",
        address:"Nagpur",
        profile:"https://knorish-asset-cdn.azureedge.net/knorish-static-assets/images/v1/livesession/livesession-2.png"
    },
    {
        id: 4,
        age: 24,
        name: "test4",
        email: "test4@gmail.com",
        address:"Blr",
        profile:"https://knorish-asset-cdn.azureedge.net/knorish-static-assets/images/v1/livesession/livesession-2.png"
    },
    {
        id: 5,
        age: 24,
        name: "test3",
        email: "test5@gmail.com",
        address:"Hyd",
        profile:"https://knorish-asset-cdn.azureedge.net/knorish-static-assets/images/v1/livesession/livesession-2.png"
    }
]
class EmployeeSearch extends React.Component {
    constructor(props) {
        super();
        this.state = {
            employees: employees,
            filteredEmployees:employees,
            searchQuery:""
        }
    }
    handleSearch(e){
        this.setState({searchQuery:e.target.value})
        if(!e.target.value){
            //s earch
            this.setState({filteredEmployees:employees})
        }else{
            let filterData = this.state.employees.filter((employee)=>{
                return employee.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            this.setState({filteredEmployees:filterData})
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="mb-3">
                        <input type="text" className="form-control" value={this.state.searchQuery} onChange={(e) => this.handleSearch(e)} placeholder="Search Employee" />
                    </div>
                </div>
                <div className="row mt-5">
                    {this.state.filteredEmployees.length>0 ? (<div>{this.state.filteredEmployees.map((employee) => {
                        return (
                            <div className="list-group">
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{employee.name}</h5>
                                        <small>age: {employee.age}</small>
                                    </div>
                                    <img src={employee.profile} style={{width:'100px',height:'100px'}}/>
                                    <p class="mb-1">Email:{employee.email}</p>
                                    <small>Addres: {employee.address}</small>
                                </a>
                            </div>
                        )
                    })}</div>) : <h1>No Employees found</h1>}

                    {/* <ul>
                        {this.state.filteredEmployees.map((item)=>{
                            return <li>name:{item.name} age {item.age} email:{item.email}</li>
                        })}
                    </ul> */}
                    
                </div>

            </div>
        )
    }
}

export default EmployeeSearch
