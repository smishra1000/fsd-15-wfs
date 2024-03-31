import { useState,useEffect } from "react"

function BlogList2(){
const [blogs,setBlogs] = useState([])
const [isLoading,setIsloading]=useState(false)
    const getAllBlogs = ()=>{
        setIsloading(true)
        fetch("http://localhost:7000/blogs").then(function(res){
            return res.json();
        }).then(function(data){
            setBlogs(data)
            setIsloading(false)
        })
    }
    const getBlogNames = ()=>{
        fetch("http://localhost:7000/blogs/names").then(function(res){
            return res.json();
        }).then(function(data){
            setBlogs(data)
            setIsloading(false)
        })
    }
    useEffect(()=>{
        //getAllBlogs()
        getBlogNames()
    },[])

    if(isLoading) return <p>loading.....</p>
    return(
        <div>
        <h1>Blog List Uisng API CALL</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
            {blogs
                .map((blog) => {
                    return (
                        <div className="blog-item">
                            <div className="blog-title">
                                <h4>{blog}</h4>
                            </div>
                            {/* <div className="blog-desc">
                                <p>{blog.description}</p>
                                <p>{blog.author}</p>
                                <p>{blog.catgory}</p>
                            </div> */}
                        </div>
                    )
                })}
        </div>
    </div>
    )
}

export default BlogList2