const http = require("http")

// http.createServer(function (req, res) {

//     if (req.url === "/movies") {
//         res.writeHead(200, { 'Content-Type': "application/json" })
//         res.end(JSON.stringify(["abc", "thor"]))
//     } else if (req.url === "/users") {
//         res.writeHead(200, { 'Content-Type': "application/json" })
//         res.end(JSON.stringify([{ id: 1, name: "test1", age: 20, email: "test1@gmail.com" }]))
//     }else if (req.url === "/employees") {
//         res.writeHead(200, { 'Content-Type': "application/json" })
//         res.end(JSON.stringify([{ id: 1, name: "test1", age: 20, email: "test1@gmail.com",companyName:"Careerx" }]))
//     }
//     else {
//         res.writeHead(200, { 'Content-Type': "text/html" })
//         res.end('<h1 style="color:red">hello welcome to nodejs</h1>')
//     }

// }).listen(7000)

// http://localhost:7000

// client server arch-- client make a request to server ; server will process those request
// and sebd response back to client
// http methods are the way through which client and server talks to each other
// GET-- get method is use to get a resource from the server
// POST--post method is use to save data or create new resource on server
//PUT-- put method is use to update the resource on server
// PATCH-- patch methods is use to update some portion of resource on server
// DELETE--Delete methos is use to delete resource on server
// http protocal--hyper text transfer protocal--req-res cycle

// sattus code-- 200,300,400,500
    // 500---server error 
    // 400 ---client side error 
    // 200 success 
    // 300--- redirection 
    //100-- information

    //  nodejs intro, why nodejs , nodejs module--http 
    /// client server arch--http protocol,http methods,http status codes




    // const server = http.createServer((req,res)=>{
    //     res.writeHead(404,{'Content-Type':"application/json"})
    //     res.end("the page not found")
    // });

    // server.listen(9000)


