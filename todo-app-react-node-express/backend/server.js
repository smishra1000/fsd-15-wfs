const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const cors = require("cors");

const todoRoutes =require("./routes/todo")

app.use(cors())


app.use(express.json())
// wheneever you recieve req with prefix /todo please go inside todoRoutes
app.use("/todo",todoRoutes)



app.listen(7000,()=>{
    console.log("server is running on port 7000")
})

// http://localhpost:7000/todo/list

// http://localhost:7000/todo/create