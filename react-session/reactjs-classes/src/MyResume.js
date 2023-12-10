import React from "react";

class MyResume extends React.Component{
    constructor(){
        super();
        this.state={
            name:"sameer mishra",
            email:"test@gmail.com",
            phone:"1414144141",
            age:"20",
        }
    }
    changeName(){
    //    this.state.name="sameer updated" 
         this.setState({name:"sameer updated"})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <h1>My Resume</h1>
                <h4> About me: Hi I am sameer mishra full satck develoiper</h4>
                <h4>Name:{this.state.name}</h4>
                <h4>Email: {this.state.email}</h4>
                <h4>phone:{this.state.phone}</h4>
                <h4>age : {this.state.age}</h4>
                <button onClick={()=>this.changeName()}>change name</button>
            </div>
        )
    }
}

export default MyResume