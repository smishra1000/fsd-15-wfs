import React from "react"
import ChildColor from "./ChildColor"

class ParentColor extends React.Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: "green"
        }
    }

    changeBoxColor(data){
        this.setState({backgroundColor:data})
    }

    render() {
        return (
            <div>
                <div style={{ background: this.state.backgroundColor, height: '200px', width: '200px' }}>
                    <h4>I am parent</h4>

                </div>
              <ChildColor colorFromChild={(data)=>this.changeBoxColor(data)}/>
            </div>

        )
    }
}

export default ParentColor


// function order(cb){
//     cb(123);

// }

// function pay(data){

// }

// order(pay)



