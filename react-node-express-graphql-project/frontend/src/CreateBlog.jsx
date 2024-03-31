import { useState } from "react"

function CreateBlog() {
    const [formData,setFormData] = useState({title:"",description:'',category:"",author:""})

    const onfieldChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const createBlog = (e)=>{

    }
    return (
        <div className="blog-container">
            <div>
                <label>Blog Title</label>
                <input type="text" value={formData.title} placeholder="enter blog title" onChange={(e)=>onfieldChange(e)} name="title"/>
            </div>

            <div>
                <label>Blog Description</label>
                <input type="text" value={formData.description} placeholder="enter blog desc" name="description" onChange={(e)=>onfieldChange(e)}/>
            </div>
            <div>
                <label>Blog Catgory</label>
                <input type="text" value={formData.category} placeholder="enter blog catgory" name="category" onChange={(e)=>onfieldChange(e)}/>
            </div>
            <div>
                <label>Blog Author</label>
                <input type="text" value={formData.author} placeholder="enter blog author" name="author" onChange={(e)=>onfieldChange(e)}/>
            </div>
            <button onClick={(e)=>createBlog(e)}>Create</button>
        </div>
    )
}

export default CreateBlog