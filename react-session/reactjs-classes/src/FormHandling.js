import React from "react"

class FormHandling extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            isDisplay: false
        }
    }
    firstNameChange(e) {
        console.log(e.target.value)
        this.setState({ firstName: e.target.value })

    }

    lastNameChange(e) {
        this.setState({ lastName: e.target.value })
    }
    onAgeChange(e) {
        this.setState({ age: e.target.value })
    }

    saveData(e) {
        e.preventDefault();
        this.setState({isDisplay:true})
        console.log("form data eneterd", this.state)
    }

    render() {
        return (
            <div>
                <h4>Form Handling</h4>
                <form onSubmit={(e) => this.saveData(e)}>
                    <label>First Name</label>
                    <input type="text" placeholder="enter first name" value={this.state.firstName} onChange={(e) => this.firstNameChange(e)} />
                    <br />
                    <label>Last Name</label>
                    <input type="text" placeholder="enter last name" value={this.state.lastName} onChange={(e) => this.lastNameChange(e)} />
                    <br />
                    <label>Age</label>
                    <input type="text" placeholder="enter age " value={this.state.age} onChange={(e) => this.onAgeChange(e)} />
                    <button>Save</button>
                </form>
                {this.state.isDisplay ? (<div style={{ width: '300px', height: '300px', border: '2px solid green' }}>
                    <h4>Entered form data </h4>
                    <h4>First name: {this.state.firstName}</h4>
                    <h4>Last name: {this.state.lastName}</h4>
                    <h4>Age: {this.state.age}</h4>
                </div>) : null}
            </div>
        )
    }
}

export default FormHandling
