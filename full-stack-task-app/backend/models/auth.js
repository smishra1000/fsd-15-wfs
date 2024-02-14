const mongoose = require("mongoose")

let authSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    rePassword:String
})

module.exports = mongoose.model("auth",authSchema)