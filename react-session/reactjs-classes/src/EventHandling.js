import React from "react"

class EventHandling extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
        // 1st way uisng bind inside constructor
        this.eventhandling1 = this.eventhandling1.bind(this)
    }

    eventhandling1(){
        console.log("first way",this.state.name)
    }
    eventhandling2(){
        console.log("2nd way",this.state.name)
    }
    eventhandling3(){
        console.log("third way way",this.state.name)
    }

    nameChange(e){
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    
    eventhandling4 = ()=>{
        console.log("4th way event handlin4")
    }

    render(){
        return(
            <div>
                <h4>Name is {this.state.name}</h4>
                <button onClick={this.eventhandling1}>eventhandling1</button>
                <button onClick={this.eventhandling2.bind(this)}>eventhandling2</button>
                <button onClick={()=>this.eventhandling3()}>eventhandling3</button>
                <button onClick={this.eventhandling4}>eventhandling4</button>
                <input type="text" value={this.state.name} placeholder="enter name" onChange={(e)=>this.nameChange(e)}/>

            </div>
        )
    }
}

export default EventHandling