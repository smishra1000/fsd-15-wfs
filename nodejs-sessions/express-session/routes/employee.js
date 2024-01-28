const express = require("express")

const router = express.Router();
// write all types whcih you need

router.get("/getEmpployee",function(req,res){
    res.send([{id:1,company:"EPAM",name:"sameer"}])
})




module.exports = router;