import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
function NavBar() {
    const [isToggled, setIsToggled] = useState(false)
    const [user,setUser] = useState(null)
    const navigate = useNavigate();
    const getUserInfo = async ()=>{
        const userInfo = await localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
        setUser(userInfo)
    }
    useEffect(()=>{
        getUserInfo();
       
    },[])
    const logout = async () => {
        setIsToggled(!isToggled)
        await localStorage.clear();
        navigate("login")
    }
    const dropDownToggele = () => {
        setIsToggled(!isToggled)
    }

    const goToPage = (e,pageName)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate(pageName)
        setIsToggled(!isToggled)
        
    }
    return (
        <nav className="navbar navbar-expand" style={{ backgroundColor: "#009688" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TaskiFy</Link>
                <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent" style={{ justifyContent: 'space-around' }}>
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    {user?.role!="admin" && <li className="nav-item">
                            <Link to="/tasks" className="nav-link active" aria-current="page" >TaskList</Link>
                        </li>}
                        {user?.role==="admin" && <li className="nav-item">
                            <Link to="/adminTasks" className="nav-link active" aria-current="page" >Task List</Link>
                        </li>}
                        {user?.role!="admin" && <li className="nav-item">
                            <Link to="/mytask" className="nav-link active" aria-current="page" >MyTask</Link>
                        </li>}
                        {user?.role==="admin" && <li className="nav-item">
                            <Link className="nav-link" to="/create-task">Create Task</Link>
                        </li>}
                        {user?.role==="admin" && <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>}

                    </ul>
                    <ul className="navbar-nav" style={{marginLeft:'auto'}}>
                        <li class="nav-item dropdown">
                            <Link class="nav-link" role="button" onClick={() => dropDownToggele()}>
                                <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'#ddd'}}></div>
                            </Link>
                            {isToggled && <div class="dropdown-menu" style={{ display: 'block' }}>
                                <Link class="dropdown-item" onClick={(e) => goToPage(e,"profile")}>ProfileInfo</Link>
                                <Link class="dropdown-item" onClick={(e) => goToPage(e,"change_password")}>Change Password</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" onClick={() => logout()}>Logout</Link>
                            </div>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar