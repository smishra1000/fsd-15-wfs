const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const filUpload = require("express-fileupload")
const taskRoutes = require("./routes/task")
const authRoutes = require("./routes/auth")
const userTaskRoutes = require("./routes/userTask")

mongoose.connect("mongodb://localhost:27017/task-app")

const app = express();
app.use(express.json())
app.use(cors())
app.use(filUpload())


// function checkToken(req,res,next){
//     let token = req.headers.authorization
//     if(!token){
//         res.send("you are not allowed to get task list")
//     }else{
//         next()
//     }
// }

function checkPaidOrNot(req,res,next){
    let userPaid = true
    if(!userPaid){
        res.send("you didnt pay the amount so cant watch movies")
    }else{
        next()
    }
}
app.use("/uploads",express.static('uploads'))


app.use("/task",taskRoutes);
app.use("/auth",authRoutes);
app.use("/user/task",userTaskRoutes)



app.get("/",function(req,res){
    res.send("hello world")
})



app.listen(7000,()=>{
    console.log("server is running at 7000")
})