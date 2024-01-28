const express = require("express")
const cors = require("cors");
const userRoutes = require("./routes/user")
const empRoutes = require("./routes/employee")

const app = express();


app.use(cors())

app.use("/users",userRoutes)
app.use("/employee",empRoutes)

app.listen(7000,()=>{
    console.log("app is running at post 7000")
})
