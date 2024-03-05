import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
function NavBar() {
    const [isToggled, setIsToggled] = useState(false)
    const navigate = useNavigate();
    const logout = async () => {
        await localStorage.clear();
        navigate("login")
    }
    const dropDownToggele = () => {
        setIsToggled(!isToggled)
    }
    return (
        <nav className="navbar navbar-expand" style={{ backgroundColor: "#009688" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TaskiFy</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'space-around' }}>
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/tasks" className="nav-link active" aria-current="page" >TaskList</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-task">Create Task</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <Link class="nav-link" role="button" onClick={() => dropDownToggele()}>
                                <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'#ddd'}}></div>
                            </Link>
                            {isToggled && <div class="dropdown-menu" style={{ display: 'block' }}>
                                <Link class="dropdown-item" to="profile">ProfileInfo</Link>
                                <Link class="dropdown-item" href="#">Change Password</Link>
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