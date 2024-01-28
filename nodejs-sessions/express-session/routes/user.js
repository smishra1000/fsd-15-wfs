const express = require("express")

const router = express.Router();

const users = [
    {
        id: 1,
        name: "test1",
        email: "test1@gmail.com",
        age: 20
    },
    {
        id: 2,
        name: "test2",
        email: "test2@gmail.com",
        age: 22
    },
    {
        id: 3,
        name: "test3",
        email: "test3@gmail.com",
        age: 23
    }
]

router.get("/all",function(req,res){
    res.send(users)
})

router.get("/:email",function(req,res){
    console.log(req.params)
    let user = users.find((item)=>{
        return item.email===req.params.email
    })
    res.send(user)
})


// create user 
// put user
router.delete("/:id",function(req,res){
    console.log(req.params.id)
    let findIndex = users.findIndex((item)=>{
        return item.id===req.params.id
    })
    if(findIndex){
        users.splice(findIndex,1)
    }
    res.send(users)
})

module.exports = router
