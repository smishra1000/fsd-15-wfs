import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        let user = localStorage.getItem("loggedInUser") && JSON.parse(localStorage.getItem("loggedInUser"))
        if (user) {
            fetch("http://localhost:7000/auth/profile/" + user.email).then((res) => {
                return res.json();
            }).then((data) => {
                setUser(data);
            })
        }

    }, [])
    return (
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        My Profile
                    </div>
                    {user && <div className="card-body">
                        <h5 className="card-title">{user.fullName}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link className="btn btn-primary">Logout</Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Profile