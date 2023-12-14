import React from "react";

class ChildColor extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    changeColor(){
        console.log("change color called")
        this.props.colorFromChild("pink");
    }

    render(){
        return(
            <button onClick={()=>this.changeColor()}>ChangeColor</button>
        )
    }
}

export default ChildColor