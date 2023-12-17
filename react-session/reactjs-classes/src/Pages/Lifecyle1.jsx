import React from "react";
import Lifecycle2 from "./Lifecycle2";
class Lifecycle1 extends React.Component{
    constructor(){
        console.log("1 constructor parent")
        super();
        this.state = {
            parentCount:0
        }
    }
    incrementParent(){
        this.setState({parentCount:this.state.parentCount+1})
    }
    static getDerivedStateFromProps(){
        console.log("2 getDerivedStateFromProps parent")
    }
    shouldComponentUpdate(){
        console.log("2 shouldComponentUpdate parent ")
        return true
    }
    render(){
        console.log("1 render parent")
        return(
            <div>

            <h4>Lifecycle1 parent count is {this.state.parentCount}</h4>
            <button onClick={()=>this.incrementParent()}>increment parent count</button>

            <Lifecycle2 count={this.state.parentCount}/>
        </div>
        )
    }
    componentDidMount(){
        console.log("4 componentDidMount parent")
    }
    getSnapshotBeforeUpdate(){
        console.log("4 getSnapshotBeforeUpdate parent")
    }
    componentDidUpdate(){
        console.log("5 componentDidUpdate parent")
    }
    componentWillUnmount(){
        console.log("unmoounting")
    }
}

export default Lifecycle1