import { useState } from "react"
function Counter(){
    console.log("componenet loaded")
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(18)
    console.log(useState(18))
    // const [age,setAge] = [18,updateFnforState]

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }

    function reset(){
        setCount(0)
    }
    return(
        <div>
            <h4>count is {count}</h4>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>decrement</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}
export default Counter