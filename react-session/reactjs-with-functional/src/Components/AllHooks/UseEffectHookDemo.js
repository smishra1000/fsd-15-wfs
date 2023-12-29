import { useState,useEffect } from "react"
function UseEffectHookDemo(){

    const [count,setCount] = useState(0);
    const [age,setAge] = useState(18)
    // 1 type will called in each render

    useEffect(()=>{
        console.log("i am first type of useEffect calling in each render ")
    })

    // 2 type will called in very first render 
    useEffect(()=>{
        console.log("i am 2nd type of useEffect calling in very first render")
    },[])

    // 3 type will called in whenever deps array value change 
    useEffect(()=>{
        console.log("i am 3rd type of useEffect calling in deps array change")
    },[age,count])

    return(
        <div>
            <h4>use effect hook demo-- this hook is used to perform effect call like api, network,web api</h4>
            <h4>count value : {count}</h4>
            <h4>Age: {age}</h4>
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>increment Count</button>
            <button onClick={()=>setAge(age+1)}>change Age</button>
        </div>
    )
}

export default UseEffectHookDemo