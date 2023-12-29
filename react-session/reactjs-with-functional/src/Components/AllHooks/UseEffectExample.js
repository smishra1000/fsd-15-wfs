import { useEffect, useState } from "react"

function UseEffectExample(){
    const [users,setUsers] = useState([])
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(18)

    // useEffect(()=>{
    //     console.log("first type in each render")
    //     fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
    //         return res.json()
    //     }).then(function(result){
    //         setUsers(result)
    //     })
    // })

    useEffect(()=>{
        console.log("2nd type very first renderr")
        fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
            return res.json()
        }).then(function(result){
            setUsers(result)
        })
    },[])

    useEffect(()=>{
        console.log("third type on change of age only")
        fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
            return res.json()
        }).then(function(result){
            setUsers(result)
        })
        // return ()=>{
        //     console.log("unmounting")
        // }
    },[age])
    return(
        <div>
            <ul>
                {users.map((user)=>{
                  return(
                    <li>id: {user.id} name:  {user.name}  email: {user.email}  </li>
                  )  
                })}
            </ul>
            <h4>count is {count}</h4>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <h4>age is {age}</h4>
            <button onClick={()=>setAge(age+1)}>increment Age</button>
        </div>
    )
}

export default UseEffectExample