import { useState } from "react"
import {useNavigate} from "react-router-dom"

function Signup() {
    const [userAuth,setUserAuth] = useState({email:"",fullName:"",password:"",rePassword:""})
    const [isError,setIsError] = useState(false)
    const [errMessage,setErrMessage] = useState("")
    const navigate = useNavigate()

    const onFieldChange = (e)=>{
        console.log(e.target.name,e.target.value)
        setUserAuth((prevState)=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    const register = (e)=>{
        e.preventDefault();
        console.log(userAuth)
        fetch("http://localhost:7000/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userAuth)}).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result.success){
                navigate("/login")
            }else{
                setIsError(true)
                setErrMessage(result.message)
            }
        })
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center">Signup</h4>
                        <form onSubmit={register}>
                            <div className="mb-3">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" value={userAuth.fullName} onChange={onFieldChange} name="fullName"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="text" className="form-control" value={userAuth.email} onChange={onFieldChange} name="email"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Password</label>
                                <input type="password" className="form-control" value={userAuth.password} onChange={onFieldChange} name="password"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Re-enter password</label>
                                <input type="password" className="form-control" value={userAuth.rePassword} onChange={onFieldChange} name="rePassword"/>
                            </div>
                            <input type="submit" className="btn btn-primary w-100" value="Signup" style={{background:'#009688',border:'1px solid #009688'}}/>
                            {isError && <div className="mb-3">
                                <h4 style={{color:"red"}}>{errMessage}</h4>
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup