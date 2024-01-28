const http = require("http")
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
const server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST,PUT,DELETE');
    if (req.method === "GET" && req.url === "/users") {
        console.log(req.url)
        res.writeHead(200, { 'Content-Type': "application/json" })
        res.end(JSON.stringify(users))
    }
})
server.listen(7000, () => {
    console.log("server is ruuing at port 7000")
})