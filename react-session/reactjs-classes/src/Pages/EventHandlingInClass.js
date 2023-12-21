import React from "react"
class EventHandlingInClass extends React.Component{
    constructor(){
        super()
        this.state = {
            age:20,
            background:'red'
        }
        this.decrementAge = this.decrementAge.bind(this)
    }
    incrementAge(){
        console.log("hii i am increment function",this)
    }
    decrementAge(){
        console.log("hii i am decrementAge function",this)
    }
    resetAge(){
        console.log("hii i am resetAge function",this)
    }
    changeColor(e){
            console.log(e.target.value)
            this.setState({background:e.target.value})
    }
    render(){
        return(
            <div className="container">
                <h4>Event handling demo</h4>
                <h4>Age is {this.state.age}</h4>
                <button className="btn btn-success" onClick={()=>this.incrementAge()}>Increment Age</button>
                <button className="btn btn-danger" onClick={this.decrementAge}>decrement Age</button>
                <button className="btn btn-warning" onClick={this.resetAge.bind(this)}>Reset Age</button>
                <div style={{width:'100px',height:'100px',background:`${this.state.background}`}}>

                </div>
                <input type="text" placeholder="enter color value" value={this.state.background} onChange={(e)=>this.changeColor(e)}/>
            </div>
        )
    }

}

export default EventHandlingInClass

//<button className="btn btn-success" onclcik="incrementAge()">Increment Age</button>