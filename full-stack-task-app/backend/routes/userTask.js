const express = require("express");
const UserTaskModel = require("../models/userTask")
const router = express.Router();
const mongoose = require("mongoose")
const TaskModel = require("../models/task");
const AuthModel = require("../models/auth");
const userTask = require("../models/userTask");



router.get("/myTask/:userId",async function(req,res){
    let myTasks = await userTask.find({userId:req.params.userId}).populate("taskId","taskName taskDesc").exec();
    res.send(myTasks)
})
router.post("/assignTask", async function(req,res){
    // here logic will come to assign task to particular user
    // get the userId taskId and then default sttaus to inprogress
    const {taskId,userId,status} = req.body
    const task = await TaskModel.findById(taskId);
    const user = await AuthModel.findById(userId);

    if(task && user){
        const newUserTask = new UserTaskModel(req.body);
        const createdUserTask = await newUserTask.save();
        task.assigned = true;
        task.save();
        res.send(createdUserTask)
    }else{
        res.send("user not exist")
    }

})



module.exports = router