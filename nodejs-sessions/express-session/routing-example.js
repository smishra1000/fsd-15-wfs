const express = require("express")

const app = express();


app.get("/movies",function(req,res){
    res.send("get movies routes")
})

app.post("/movies",function(req,res){
    res.send("post movies routes")
})

app.put("/movies",function(req,res){
    res.send("put movies routes")
})

app.delete("/movies",function(req,res){
    res.send("delete movies routes")
})
app.patch("/movies",function(req,res){
    res.send("patch movies routes")
})

app.get("/users/:phone",function(req,res){
    console.log(req.params)
    res.send(`get users by phone routes with phone=${req.params.phone}`)
})

app.get("/users/:id/:age",function(req,res){
    console.log(req.params)
    res.send(`get users by id routes with id=${req.params.id} and age is ${req.params.age}`)
})

app.get("/users",function(req,res){
    res.send("get users routes")
})


app.listen(7000,()=>{
    console.log("server is running at port 7000")
})
