import { useState } from "react"

function Sum(){
    const [firstNmuber,setFirstNumber] = useState(0)
    const [secondNumber,setSecondNumber] = useState(0)
    const [result,setResult] = useState(0)

    function handleFirstNumber(e){
        setFirstNumber(e.target.value)
    }
    const handleSecondNumber = (e)=>{
        setSecondNumber(e.target.value)
    }

    const calculate = ()=>{
        //setResult(+firstNmuber + +secondNumber)
        setResult(Number(firstNmuber) + Number(secondNumber))
    }
    return(
        <div>
            <h4> Sum of 2 number</h4>
            <label>First Number</label>
            <input type="text" value={firstNmuber} onChange={(e)=>handleFirstNumber(e)}/>
            <br/>
            <label>Second Number</label>
            <input type="text" value={secondNumber} onChange={(e)=>handleSecondNumber(e)}/>
            <br/>

            <button onClick={()=>calculate()}>Calculate Sum</button>

            <h4> sum of 2 number={result}</h4>

        </div>
    )
}

export default Sum