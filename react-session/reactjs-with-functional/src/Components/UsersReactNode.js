
import { useState, useEffect } from "react"


function UsersReactNode() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:7000/users").then(function (res) {
            return res.json()
        }).then(function (result) {
            setUsers(result)
        })
    }, [])
    return (
        <div className="container">
            <div className="row">
                <h1>users react with node</h1>

                <table className="table table-striped">
                    <thead><tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr></thead>
                    <tbody>
                        {users.map((item)=>{
                            return(
                                <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default UsersReactNode