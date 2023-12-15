import React from "react"

class Counter extends React.Component{
    constructor(){
        super();
        this.state= {
            count:0
        }
        // this.increment = this.increment.bind(this)
    }

    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    reset = ()=>{
        this.setState({count:0})
    }

    render(){
        return(
            <div>
                <h4>Count is {this.state.count}</h4>
                {/* <button onClick={this.increment}>Increment</button> */}
                <button onClick={this.increment.bind(this)}>Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter