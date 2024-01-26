const http = require("http")

const users = [
    {
        id:1,
        name:"test1",
        email:"tet1@gmail.com",
        age:20
    },
    {
        id:2,
        name:"test2",
        email:"tet2@gmail.com",
        age:22
    },
    {
        id:3,
        name:"test3",
        email:"tet3@gmail.com",
        age:23
    },
    {
        id:4,
        name:"test4",
        email:"tet4@gmail.com",
        age:23
    }
]

const server = http.createServer(function(req,res){
    if(req.url==="/users"){
        res.writeHead(200, { 'Content-Type': "application/json" })
        res.end(JSON.stringify(users))
    }
   
})

server.listen(7000,function(){
    console.log("server is ruuing on port 7000")
})