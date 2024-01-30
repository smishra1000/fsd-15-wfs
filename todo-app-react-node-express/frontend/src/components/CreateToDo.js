import { useState } from "react"

import Loader from "./Loader";
function CreateToDo() {
    const [taskName, setTaskName] = useState("")
    const [taskDesc, setTaskDesc] = useState("");
    const [showLoader,setShowLoader] = useState(false)

    const handleTaskName = (e) => {
        setTaskName(e.target.value)
    }

    const handleTaskDesc = (e) => {
        setTaskDesc(e.target.value)
    }

    const createToDo = ()=>{
        setShowLoader(true)
        console.log(taskName,taskDesc)
        fetch("http://localhost:7000/todo/create",{method:"POST",headers: {
            "Content-Type": "application/json",
          },body:JSON.stringify({taskName,taskDesc})}).then(function (res) {
            return res
        }).then(function (result) {
            console.log("data saved successfully")
            resetData();
            setShowLoader(false)
        })
    }

    const resetData = ()=>{
        setTaskDesc("")
        setTaskName("")
    }
    return (
        <div className="container">
            <div className="row">
                <h1>Welcome to create ToDo </h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>
                        Task Name
                    </label>
                    <input type="text" className="form-control" value={taskName} onChange={handleTaskName} />
                </div>
                <div className="col-md-6">
                    <label>
                        Task Description
                    </label>
                    <input type="text" className="form-control" value={taskDesc} onChange={(e) => handleTaskDesc(e)} />
                </div>
                <div className="col-md-3 mt-4">
                    <button className="btn btn-success" onClick={()=>createToDo()}>Create</button>
                </div>
            </div>
            {showLoader &&<Loader/>}
        </div>
    )
}

export default CreateToDo