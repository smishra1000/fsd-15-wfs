import { useState } from "react"
function Student(){
    // simple plain data
    const [name] = useState("sameer")
    const [age] = useState(20)
    const [email] = useState("sameer@.com")
    // complex data as an object
    const [userInfo] = useState({name:"test10",age:"30",email:"test10@gmail.com"})

    const [marks] = useState([20,30,40,50])

    return(
        <div>
                 <h1>student data</h1>
                 <h4>Name: {name}</h4>
                 <h4>Age is {age}</h4>
                 <h4>email: {email}</h4>
                 <h3>Complex user info data</h3>
                 <h4>name {userInfo.name} {userInfo.email} {userInfo.age}</h4>
                 <ul>
                    {marks.map((item)=>{
                        return(
                            <li>{item}</li>
                        )
                    })}
                 </ul>
        </div>
       
    )
}

export default Student
