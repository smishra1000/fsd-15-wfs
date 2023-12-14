import React from "react"
import ChildAge from "./ChildAge"

class ParentAge extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            parentAge:80,
            childAge:50
        }
    }

    onRecieve(data){
        console.log("recieving from child",data)
    }

    render(){
        return(
            <div style={{border:'2px solid red'}}>
                <h4> Hi Welcome to parent Age Component</h4>
                <h4>Parent Age is {this.state.parentAge}</h4>
                <ChildAge x={this.state.childAge} y={(data)=>this.onRecieve(data)}/>
            </div>
        )
    }
}


export default ParentAge