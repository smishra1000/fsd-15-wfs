import { useEffect, useRef } from "react"
function UseRefHookDemo(){
    const inputRef = useRef("sameer")
    const ageRef = useRef(null)
    console.log(inputRef)
    const showName = ()=>{
        console.log(inputRef.current.value)
    }
    useEffect(()=>{
        ageRef.current.focus()
    },[])
    
    return(
        <div>
            <h4>Useref hook demo</h4>
            {/* <input type="text" ref={inputRef} value={inputRef.current}/> */}
           {/* <h1>{inputRef.current.value}</h1> */}
           {/* <button onClick={()=>showName()}>showName</button> */}
           <input type="text" placeholder="enter age" ref={ageRef}/>
    </div>
    )
}

export default UseRefHookDemo