import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
function UserCreateForm() {
    const [user,setUser] = useState({name:"",email:"",website:""});
    const navigate = useNavigate();


    const onFieldChange = (e)=>{
            console.log(e.target.value,e.target.name)
            setUser({...user,[e.target.name]:e.target.value})
    }

    // useEffect(()=>{
    //     localStorage.setItem("users",JSON.stringify(users))
    // },[users])

    const createUser = async ()=>{
        let udata = [];
        udata.push(user)
        await localStorage.setItem("users",JSON.stringify(udata))
        navigate("/userscrud")
    }
    return (
        <div className="container">
            <h4>User create form</h4>
            <div className="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="enter name" value={user.name} onChange={(e)=>onFieldChange(e)} name="name"/>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" placeholder="enter email" value={user.email} onChange={(e)=>onFieldChange(e)} name="email"/>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                    <label class="form-label">website</label>
                    <input type="text" class="form-control" placeholder="enter website" value={user.website} onChange={(e)=>onFieldChange(e)} name="website"/>
                </div>
            </div>
            <div className="col-md-6">
                <button className="btn btn-primary" onClick={()=>createUser()}>create user</button>
            </div>

        </div>
    )
}

export default UserCreateForm