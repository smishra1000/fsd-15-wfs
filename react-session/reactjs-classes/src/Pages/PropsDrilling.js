import React from "react";

class PropsDrilling extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 100
        }
    }
    render() {
        return (
            <div>
                <h1>Props drill concepts</h1>
                <Comp2 age={this.state.age}/>
            </div>
        )
    }
}

export default PropsDrilling

class Comp2 extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <h1>Comp2</h1>
            <Comp3 age={this.props.age}/>
        </div>
        )

    }
}

class Comp3 extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Comp3</h1>
                <Comp4 age={this.props.age}/>
            </div>
        )
    }
}

class Comp4 extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Comp4 age recieved from parent {this.props.age}</h1>
            </div>
        )
    }
}