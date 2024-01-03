import {createContext, useContext, useState} from "react"
const companyContext = createContext()
function EmployeeContext(){
    const [company,setCompany] = useState("Google")
    return(
        <div>
            <h1>Employee Context demo</h1>
            <companyContext.Provider value={company}>
                    <SameerEmployee/>
                    
            </companyContext.Provider>
           
        </div>
    )
}


function SameerEmployee(){
    const company = useContext(companyContext)
    return(
        <div>
            <h1>Hi i am sameer employee name of compnay is {company}</h1>
            <SupriyaEmployee/>
        </div>
    )
}

function SupriyaEmployee(){
    const company = useContext(companyContext)
    return(
        <h4>hi i am supriya name of compnay is {company}</h4>
    )
}

export default EmployeeContext