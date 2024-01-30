const express = require("express");

const router = express.Router()


const todos = [

]

router.get("/list", function (req, res) {
    res.send(todos)
})

router.post("/create",function(req,res){
    console.log(req.body)
    todos.push({taskDesc:req.body.taskDesc,taskName:req.body.taskName,id:todos.length ? todos.length+1 : 1,status:"inprogress"})
    res.send("create todo comming soon")
})

router.delete("/delete/:id",function(req,res){
    console.log(req.params); //{id:2}

    let filteredTodos = todos.filter((item)=>{
        return item.id!==Number(req.params.id)
    })
    res.send(filteredTodos)

})

router.put("/update/:id",function(req,res){
    let index = todos.findIndex((item)=>{
        return item.id===Number(req.params.id)
    })
    if(index>-1){
        todos[index].status="completed"
    }
    res.send(todos)
})



module.exports = router