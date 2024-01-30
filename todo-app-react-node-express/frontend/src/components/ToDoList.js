import { useState, useEffect } from "react"

function ToDoList() {
    const [todos, setTodos] = useState([])

    const getAllToDos = ()=>{
        fetch("http://localhost:7000/todo/list").then(function (res) {
            return res.json();
        }).then(function (result) {
            setTodos(result)
        })
    }

    useEffect(() => {
        getAllToDos();
    },[])

    const deleteTodo = (id)=>{
        // http://localhost:7000/todo/delete/2
        fetch("http://localhost:7000/todo/delete/"+id,{method:"DELETE"}).then(function (res) {
            return res.json();
        }).then(function (result) {
            // getAllToDos();
            setTodos(result)
        })
    }

    const taskDone = (id)=>{
        fetch("http://localhost:7000/todo/update/"+id,{method:"PUT",headers: {
            "Content-Type": "application/json",
          },body:JSON.stringify({status:"completed"})}).then(function (res) {
            return res.json();
        }).then(function (result) {
    
            setTodos(result)
        })
    }

    return (
        <div className="container">
            {todos.length===0&&<h4>No Todos available</h4>}
            
            {todos.length>0 && <div className="row">
            <h4>My Todo's </h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((item) => {
                            return (
                                <tr className={item.status==="completed" ? 'line-through':''}>
                                    <td>{item.id}</td>
                                    <td>{item.taskName}</td>
                                    <td>{item.taskDesc}</td>
                                    <td><span class="badge bg-warning text-dark">{item.status}</span></td>
                                    <td><button className="btn btn-primary" onClick={()=>deleteTodo(item.id)}>Delete</button>
                                    {item.status==="completed" ? null : <button className="btn btn-success " onClick={()=>taskDone(item.id)}>Done</button>}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default ToDoList