import { useState } from "react"
function UseStateHookDemo(){
    const [name,setName] = useState("sameer mishra")
    const [age,setAge] = useState(18)
    const [userInfo,setUserInfo] = useState({email:"test1@gmail.com",salary:"30000"})
    const [employess,setEmployess] = useState([{id:"101",name:"test1"}])

    const changeName = ()=>{
        setName("CareerX")
    }

    const changeUserInfo = ()=>{
        setUserInfo({...userInfo,email:"test100@gmail.com",salary:50000})
    }

    const addNewEmployee = ()=>{
        setEmployess([...employess,{id:102,name:"test2"}])
    }
    return(
        <div>
            <h4>useState hook useState()-- it will use to manage state in functional componenet</h4>
            <h4>Name :  {name}</h4>
            <h4>Age : {age}</h4>
            <button onClick={()=>changeName()}>change name</button>
            <button onClick={()=>setAge(age+1)}>change age</button>
            <h4>user email : {userInfo.email}</h4>
            <h4>user salary : {userInfo.salary}</h4>
            <button onClick={()=>changeUserInfo()}>change user info </button>

            <ul>
                {employess.map((employee)=>{
                    return(
                            <li>{employee.id} {employee.name}</li>
                    )
                })}
            </ul>
            <button onClick={()=>addNewEmployee()}>Add new Employee</button>



        </div>
    )
}

export default UseStateHookDemo