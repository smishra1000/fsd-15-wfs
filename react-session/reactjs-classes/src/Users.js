import React from "react";
import "./main.css"

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: "test1",
                    email: "test1@gmail.com"
                },
                {
                    id: 2,
                    name: "test2",
                    email: "test2@gmail.com"
                },
                {
                    id: 3,
                    name: "test3",
                    email: "test3@gmail.com"
                },
                {
                    id: 4,
                    name: "test4",
                    email: "test4@gmail.com"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Users List using ul li</h4>
                    <ul>
                        {this.state.users.map((element, index) => {
                            return (
                                <li>{element.id} {element.name} {element.email}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Users List table</h4>
                    <table border={5}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.users.map((element, index) => {
                                return (
                                    <tr>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>using card/ div</h4>
                    <div className="card-container">
                        {this.state.users.map((item, index) => {
                            return (
                                <div className="card">
                                    <h4>ID:{item.id}</h4>
                                    <h4>Name:{item.name}</h4>
                                    <h4>email:{item.email}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Users