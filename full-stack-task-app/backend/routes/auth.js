const express = require("express");
const AuthModel = require("../models/auth")

const router = express.Router();

router.post("/signup",async function(req,res){
    // first check is user present with given email 
    // if yes then retrun error message to frontend --user alredy exist

    // if no-- then register or signup
    const {fullName,email,password,rePassword} = req.body
    let isUserExist = await AuthModel.findOne({email:email})
    if(isUserExist){
        return res.send({message:"user already exist",success:false})
    }
    const newUser = new AuthModel({...req.body})
    const createdUser = await newUser.save();
    res.send({message:"User Signup successfully",success:true})
})

router.post("/login",async function(req,res){
   // first check user exist or not
   // if user present with given email
            // check entred password is equal to stored password 
            //otherwise send error message that password is wrong
   // if user is not present then send error user not exist  
   const {fullName,email,password,rePassword} = req.body
   let isUserExist = await AuthModel.findOne({email:email})
    if(isUserExist){
        if(password===isUserExist.password){
            return res.send({message:"User Logged in Successfully",success:true})
        }else{
            return res.send({message:"Invalid credentials",success:false})
        }
        
    }else{
        return res.send({message:"User Not Exist",success:false})
    }   
})


module.exports = router