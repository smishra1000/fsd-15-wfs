import React from "react";
class Job extends React.Component{
    constructor(){
        
        super()
        console.log("1 construcror")
        this.state = {
            position:"React Developer",
            salary:50000,
            location:'Hyderabad'
        }

    }
    static getDerivedStateFromProps(props){
        console.log("2. getDerivedStateFromProps")
        return {
            exp:20
        }

    }
    incrementSalary(){
        this.setState({salary:60000})
    }
    shouldComponentUpdate(prevProps,PrevState){
        console.log("shouldComponentUpdate calling")
        if(PrevState.salary!=this.state.salary){
            console.log("salary not same")
            return true
        }else{
            console.log("salary same")
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps,prevSate){
        console.log("getSnapshotBeforeUpdate calling")
        console.log(prevProps,prevSate)
        return "approved by manager"
    }

    // componentDidUpdate(prevProps,prevSate,snapShot){
    //     console.log(" update done get apporval from ",snapShot)
    // }

    render(){
        console.log("3. render")
        return(
            <div>
                <h4>Welcome to job Posting site</h4>
                <div className="card">
                    <h6>Position :{this.state.position}</h6>
                    <h6>Salary :{this.state.salary}</h6>
                    <h6>location :{this.state.location}</h6>
                    <h6>Exp : {this.state.exp}</h6>
                </div>
                <button onClick={()=>this.incrementSalary()}>Increment Salary</button>
                </div>
        )
    }
    componentDidMount(){
        console.log("4. componentDidMount")
    }
    componentWillUnmount(){
        console.log("plase submit all ssest of company")
    }
}

export default Job