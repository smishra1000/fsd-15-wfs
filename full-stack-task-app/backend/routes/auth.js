const express = require("express");
const jwt = require("jsonwebtoken")
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
            // token generation line and pass to client
            let token = jwt.sign({email:isUserExist.email,_id:isUserExist._id},"testkey")
            return res.send({message:"User Logged in Successfully",success:true,token:token,email:isUserExist.email,userId:isUserExist._id})
        }else{
            return res.send({message:"Invalid credentials",success:false})
        }
        
    }else{
        return res.send({message:"User Not Exist",success:false})
    }   
})

router.get("/profile/:email",async function(req,res){
    let user = await AuthModel.findOne({email:req.params.email})
    res.send(user)

})

router.put("/changePassword", async function(req,res){
    // first will check is that usr email present or not 
    // if email found then update the password 
    // else send user forund message

    const {email,currentPassword,newPassword} = req.body;
    let user = await AuthModel.findOne({email});
    if(user){
        user.password = newPassword;
        let updateduser = await user.save();
        res.send(updateduser)
    }else{
        res.send({message:"User Not Exist",success:false})
    }

})


module.exports = router