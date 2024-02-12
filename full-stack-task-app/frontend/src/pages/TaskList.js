import { useState, useEffect } from "react"
function TaskList() {
    const [tasks, setTasks] = useState([])

    const getAllTasks = () => {
        fetch("http://localhost:7000/task/all").then((res) => {
            return res.json();
        }).then((result) => {
            setTasks(result)
        })
    }
    useEffect(() => {
        getAllTasks();
    }, [])
    return (
        <div className="container">
            <h4>Task List</h4>
            <div className="row">
                {tasks.map((task) => {
                    return (
                        <div className="col-md-3">
                            <div className="card" style={{boxShadow:'rgba(0, 0, 0, 0.12) 0px 4px 16px'}}>
                                <img className="card-img-top" src="https://ionicframework.com/docs/img/demos/card-media.png" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{task.taskName}</h5>
                                        <p className="card-text">{task.taskDesc}</p>
                                        <a href="#" class="badge-primary">{task.status}</a>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskList