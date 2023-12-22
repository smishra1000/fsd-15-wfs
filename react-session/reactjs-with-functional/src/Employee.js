import { useState } from "react"
function Employee(){
    const [employee,setEmployee] = useState({empName:"sameer",company:"ABC",salary:"5000"})
    function updateSalary(){
            setEmployee({...employee,salary:6000})
            
            //setEmployee({empName:employee.empName,company:employee.company,salary:employee.salary,salary:6000})
    }
    return(
        <div>
            <h4> Employee Info</h4>
            <h4>Name: {employee.empName}</h4>
            <h4>Company : {employee.company}</h4>
            <h4>Salry : {employee.salary}</h4>
            <button onClick={()=>updateSalary()}>update employee salary</button>
        </div>
    )
}

export default Employee