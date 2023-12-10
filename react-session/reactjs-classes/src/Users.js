import React from "react";

class Users extends React.Component{
    constructor(){
        super();
        this.state = {
            users:[
                {
                    id:1,
                    name:"test1",
                    email:"test1@gmail.com"
                },
                {
                    id:2,
                    name:"test2",
                    email:"test2@gmail.com"
                },
                {
                    id:3,
                    name:"test3",
                    email:"test3@gmail.com"
                },
                {
                    id:4,
                    name:"test4",
                    email:"test4@gmail.com"
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <h4>Users List</h4>
                <ul>
                    {this.state.users.map((element,index)=>{
                        return(
                            <li>{element.id} {element.name} {element.email}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Users