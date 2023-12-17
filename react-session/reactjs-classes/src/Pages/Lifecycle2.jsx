import React from "react";
class Lifecycle2 extends React.Component{
    constructor(props){
        console.log("1 constructor child")
        super(props)
        this.state = {

        }
    }
    static getDerivedStateFromProps(){
        console.log("2 getDerivedStateFromProps child")
    }
    shouldComponentUpdate(){
        console.log("2 shouldComponentUpdate child")
        return true
    }
    render(){
        console.log("3 render child")
        return(
            <div>
            <h4>Lifecycle2 child count data : {this.props.count}</h4>
        </div>
        )

       
    }
    getSnapshotBeforeUpdate(){
        console.log("4 getSnapshotBeforeUpdate child")
    }
    componentDidUpdate(){
        console.log("5 componentDidUpdate child")
    }
    componentDidMount(){
        console.log("4 componentDidMount child")
    }
    componentWillUnmount(){
        console.log("unmoounting")
    }
}

export default Lifecycle2