const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const { buildSchema } = require("graphql")
const cors = require("cors");

const app =express();
app.use(cors())


const schema = buildSchema(`
type Blog {
    id:ID
    title:String
    author:String
    category:String
    description:String
    feedback:String
}

input BlogInput {
    title:String
    author:String
    category:String
    description:String
    feedback:String
}

type Query {
    getAllBlogs:[Blog]
}
type Mutation {
    addBlog(input:BlogInput):Blog
}

`)

const blogs = [
    {
        id:1,
        title:"MEAN STACK",
        description:"MEAN stack is full stack technlogy",
        author:"sameer mishra",
        category:"Tech",
        feedback:"Blog contents are awesome"
    },
    {
        id:2,
        title:"MERN STACK",
        description:"MERN stack is full stack technlogy",
        author:"sameer mishra",
        category:"Tech",
        feedback:"Blog contents are awesome"
    }
]

const root = {
    getAllBlogs:()=>blogs,
    addBlog:({input})=>{
        const newBlog = {...input,id:blogs.length+1}
        blogs.push(newBlog)
        return newBlog
    }
}


// graphql endpoint
app.use("/graphql",graphqlHTTP({schema,rootValue:root,graphiql:true}))


// api endpoint
app.get("/blogs",function(req,res){
    res.send(blogs)
})
app.get("/blogs/names",function(req,res){
    let titles = blogs.map((blog)=>{
        return blog.title
    })
    res.send(titles)
})

app.listen(7000,()=>{
    console.log("server is ruuning")
})
