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

    const deleteTask = (e,id)=>{
        fetch("http://localhost:7000/task/"+id,{method:"DELETE"}).then((res) => {
            return res.text()
        }).then((result) => {
            getAllTasks();
        })
    }
    return (
        <div className="container">
            <h4>Task List</h4>
            {tasks.length===0&&<h4>Currently No Tasks Available</h4>}
            <div className="row mt-3">
                {tasks.map((task) => {
                    return (
                        <div className="col-md-3 mt-3">
                            <div className="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 16px' }}>
                                <img className="card-img-top" src="https://ionicframework.com/docs/img/demos/card-media.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{task.taskName}</h5>
                                    <p className="card-text">{task.taskDesc}</p>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <span  class="badge bg-success">{task.status}</span>
                                        <span  class="badge bg-danger" onClick={(e)=>deleteTask(e,task._id)}>delete</span>
                                    </div>

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