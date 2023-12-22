import { useState } from "react"
function Course() {
    const [courseName, setCourseName] = useState(""); //[dat1,dat2]
    const [instructor, setInstructor] = useState("")
    const [fee, setFee] = useState("")
    const [isDisplay,setIsDisplay] = useState(false)

    function handleCourseName(e) {
        setCourseName(e.target.value)
    }

    function handleFee(e) {
        setFee(e.target.value)
    }

    function handleInstructor(e) {
        setInstructor(e.target.value)
    }
    function createCourse() {
        console.log(courseName, fee, instructor)
        setIsDisplay({isDisplay:true})

    }
    return (
        <div>
            <h4>Course Registration</h4>
            <label>Course Name</label>
            <input type="text" placeholder="enter course name" value={courseName} onChange={(e) => handleCourseName(e)} />
            <br />
            <label>Instructor name</label>
            <input type="text" placeholder="enter instructor" value={instructor} onChange={(e) => handleInstructor(e)} />
            <br />
            <label>Fee</label>
            <input type="text" placeholder="enter fee" value={fee} onChange={(e) => handleFee(e)} />
            <button onClick={() => createCourse()}>Create Course</button>
            {isDisplay ?(<div>
                <h4>Course Info </h4>
                <h4>Name: {courseName}</h4>
                <h4>Instructor : {instructor}</h4>
                <h4>Fee : {fee} </h4>
            </div>):null}

        </div>
    )
}

export default Course