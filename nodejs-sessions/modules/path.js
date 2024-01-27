const path = require("path")

const filePath = "/users/sameer/nodejs/index.js"

console.log(path.basename(filePath))

const path1 = "users/sameer"

const path2 = "index.html"

console.log(path.join(path1,path2))