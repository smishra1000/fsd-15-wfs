import {useState} from "react"
function Resume() {
    const [name] = useState("sameer")
    const [age] = useState(30)
    const [email] = useState("test1@gmail.com")
    const [address] = useState("hyd")
    return (
        <div>
            <h4>Name:{name}</h4>
            <h4>Eamil: {email}</h4>
            <h4>Address: {address}</h4>
        </div>
    )
}

export default Resume