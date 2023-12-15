import React from "react";

class Courses extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            trainer: "",
            duration: "",
            description: "",
            courses: []
        }
    }

    handleDescription(e) {
        this.setState({ description: e.target.value })
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleTrainer(e) {
        this.setState({ trainer: e.target.value })
    }
    handleDuration(e) {
        this.setState({ duration: e.target.value })
    }
    createCourse(e) {
        e.preventDefault();
        let course = {
            name: this.state.name,
            description: this.state.description,
            trainer: this.state.trainer,
            duration: this.state.duration
        }
        let tempArr = this.state.courses;
        tempArr.push(course)
        this.setState({ courses: tempArr })
        console.log(this.state.courses)
        this.resetCourseDetail();

    }

    resetCourseDetail(){
        this.setState({name:"",trainer:"",duration:"",description:""})
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Course Registration</h1>
                </div>
                <form onSubmit={(e) => this.createCourse(e)}>
                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.handleName(e)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Course Description</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.handleDescription(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trainer Name</label>
                        <input type="text" className="form-control" value={this.state.trainer} onChange={(e) => this.handleTrainer(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Duration</label>
                        <input type="text" className="form-control" value={this.state.duration} onChange={(e) => this.handleDuration(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="row">
                    {this.state.courses.map((item) => {
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{item.trainer}</h6>
                                        <p className="card-text">{item.description}</p>
                                        <a href="#" className="card-link">{item.duration}</a>
                                        <a href="#" className="card-link">JoinNow</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default Courses