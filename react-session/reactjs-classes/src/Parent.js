import React from "react"

export class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"sameer mishra"
        }
    }

    render(){
        return(
            <div>
                <h1>i am parent1 named export</h1>
                <h1> From Parent : Hi My name is {this.state.name}</h1>
            </div>
        )
    }
}


export default class Parent1 extends React.Component{
    render(){
        return(
            <div>
                <h1>i am parent 2 default export</h1>
            </div>
        )
    }
}



