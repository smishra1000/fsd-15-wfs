import { useState,createContext,useContext } from "react"
const AgeContext = createContext()
function UseContextHookDemo(){
    const [age,setAge] = useState(10)
    return(
        <div>
            <h4>useContext hook demo</h4>
            <AgeContext.Provider value={age}>
                <Component1/>
            </AgeContext.Provider>
        </div>
    )
}

export default UseContextHookDemo

function Component1(){
    return(
        <div>
             <h4>hi i am component 1</h4>
            <Component2/>
        </div>
    )
}

function Component2(){
    return(
        <div>
            <h4>hi i am component 2</h4>
            <Component3/>
        </div>
    )
}

function Component3(){
    const age = useContext(AgeContext)
    return(
        <div>
 <h4>hi i am component3 my age is {age}</h4>
 <Component4/>    
        </div>
       
    )
}

function Component4(){
    const age = useContext(AgeContext)
    return(
        <h4>hi i am component4 my age is {age}</h4>
    )
}
