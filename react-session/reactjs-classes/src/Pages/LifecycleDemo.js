import React from "react";
class LifecycleDemo extends React.Component {
    constructor(props){
        super(props);
        console.log("1 constructor calling")
        this.state = {
            count:0,
            users:[]
        }

    }

    static getDerivedStateFromProps(props,state){
        console.log("2,2 getDerivedStateFromProps calling")
        return null
    }

    increment(){
        this.setState({count:this.state.count+1})
    }

    shouldComponentUpdate(){
        console.log("update phase shouldComponentUpdate calling")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("update phase getSnapshotBeforeUpdate calling")
        console.log(prevProps,prevState)
        return {prevState}
    }
    componentDidUpdate(prevProps,snapshot){
        console.log("update phase componentDidUpdate calling")
        console.log(this.state.count,snapshot)
    }


    render() {
        console.log("3,3 render calling")
        return (
            <div>
                 <h4>Lifecycle example methods</h4>
            <h4>count is {this.state.count}</h4>
            <button onClick={()=>this.increment()}>Increment</button>
            </div>
           
        )
    }

    componentDidMount(){
        var that = this;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(function(json){
                that.setState({users:json})
        })
        console.log("4. componentDidMount calling")
    }

    componentWillUnmount(){
        console.log("hi i am unmounting")
        alert("you have unsaved change wnat to exit?")
    }
}

export default LifecycleDemo