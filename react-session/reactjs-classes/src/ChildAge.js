import React from "react";

class ChildAge extends React.Component {
    constructor(props) {
       
        super(props)
        console.log(this.props)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ border: '1px solid green', margin: '2px' }}>
                <h4>Welcome to child age Component</h4>
                <h4>child age is {this.props.x }</h4>
                <button onClick={()=>this.props.y(3000)}>pass to parent</button>
            </div>
        )

    }
}

export default ChildAge
