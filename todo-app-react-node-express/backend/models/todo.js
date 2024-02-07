const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
    taskName:String,
    taskDesc:String,
    id:Number,
    status:String
})

// exporting the models which is create from schema
module.exports =  mongoose.model("todo",toDoSchema,"todo")




