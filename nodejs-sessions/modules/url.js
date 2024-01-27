const http = require("http")
const url = require("url")

// let reqUrl = "http://localhost:6000/users?movies=2023"

// const parsedUrl = url.parse(reqUrl,true)

// console.log(parsedUrl)

const server = http.createServer((req,res)=>{
    const parsed = url.parse(req.url)
    console.log(parsed.query)

})

server.listen(7000,()=>{
    console.log("server started at port 7000")
})