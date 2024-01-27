const express = require("express");
const app = express();
const cors = require("cors")


const users = [
    {
        id:1,
        name:"test1",
        email:"tet1@gmail.com",
        age:20
    },
    {
        id:2,
        name:"test2",
        email:"tet2@gmail.com",
        age:22
    },
    {
        id:3,
        name:"test3",
        email:"tet3@gmail.com",
        age:23
    },
    {
        id:4,
        name:"test4",
        email:"tet4@gmail.com",
        age:23
    }
]


// this middle ware 
app.use(cors())

app.get("/",function(req,res){
    res.send("hello from node express")
})

app.get("/movies",function(req,res){
    res.send(["SALAR","THOR"])
})

app.get("/employees",function(req,res){
    res.send(["Sameer","Supriya","Khusi"])
})

app.get("/users/:id",function(req,res){
    res.send(`users by id ${req.params.id}`)
})

app.get("/profile",function(req,res){
    res.send("hello from profile routes")
})

app.get("/users",function(req,res){
    res.send(users)

})

app.listen(7000,()=>{
    console.log("server is running on port 7000")
})

// nodejs, modules ,fs,os,path,callback,promise,url, path, events
