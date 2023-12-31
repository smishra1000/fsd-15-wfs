import { useState, useEffect } from "react"
import { usersData } from "./UsersData"
function UsersCrud() {
    const [users, setUsers] = useState(usersData)
    const [filteredUsers,setFilteredUsers] = useState(usersData)
    const [searchkey,setSearchKey] = useState("")

    const onhandleSearch = (e)=>{
        setSearchKey(e.target.value)
    }
    const searchUsers = ()=>{
        console.log("calling serch function")
        // need to write logic to filter user based on typed value on search box
        if(searchkey===""){
            setFilteredUsers(usersData)
        }else{
            let result = users.filter((item)=>{
                return item.name.toLowerCase().includes(searchkey.toLowerCase()) || item.email.toLowerCase().includes(searchkey.toLowerCase())
            })
            console.log(result)
            setFilteredUsers(result)
        }

    }

    useEffect(()=>{
        console.log("hii search key is changing")
        searchUsers();
    },[searchkey])

    // useEffect(()=>{
    //     searchUsers();
    // })

    // useEffect(()=>{
    //     searchUsers()
    // },[])

    const deleteUser = (id)=>{
        let result = users.filter((item)=>{
            return item.id!==id
        })
        console.log(result)
        setFilteredUsers(result)
    }
    return (
        <div className="container">
            <div className="row my-5" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="col-md-6">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchkey} onChange={(e)=>onhandleSearch(e)}/>
                </div>
                <div className="col-md-2">
                    <button class="btn btn-outline-success" type="submit" onClick={()=>searchUsers()}>Search</button>
                    
                </div>


            </div>
            <div className="row my-4">
                {filteredUsers.length===0 && <h4 style={{color:"green"}}>No Users Found</h4>}
                {filteredUsers.map((user) => {
                    return (
                        <div className="col-md-4 my-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="https://th.bing.com/th/id/OIP.WRzZJlYLzOB8y3yeI5MvfgAAAA?rs=1&pid=ImgDetMain" alt="Card image cap" style={{ height: '200px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <p className="card-text">{user.website}</p>
                                    <a href="#" className="btn btn-primary">Edit</a>
                                    <a href="#" className="btn btn-danger mx-5" onClick={()=>deleteUser(user.id)}>Delete</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UsersCrud