import React from "react";

class Greet extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <h1>Hi {this.props.name}, {this.props.msg}</h1>
            </div>
        )
    }
}

export default Greet