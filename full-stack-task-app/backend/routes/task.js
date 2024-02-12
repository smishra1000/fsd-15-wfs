const express = require("express");
const TaskModel = require("../models/task")
const router = express.Router();

router.get("/all",async function(req,res){
    let tasks =  await TaskModel.find({})
    // res.status(200).json(tasks)
    res.send(tasks)
})

router.post("/create",async function(req,res){
    console.log(req.body)
    // from client if you pass data that comes as a req.body
    //const {taskName,taskDesc,status,assigned,id} = req.body
    const newTaskData = new TaskModel({...req.body})
    const createdTask = await newTaskData.save();
    res.send(createdTask)
})

router.delete("/:id",async function(req,res){
    console.log(req.params)
    const {id} = req.params;
    console.log(typeof(id))
    const deletedData = await TaskModel.findByIdAndDelete(id);
    res.send("data deleted successfully")
})
 router.get("/:id",async function(req,res){
    const {id} = req.params;
    let task = await TaskModel.findById(id)
    res.send(task)
 })

module.exports = router