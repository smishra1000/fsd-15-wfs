const fs = require("fs");

//1> Reading file uisng fs.readFile

// fs.readFile("demo.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
    
// })

// 2. write file operation using fs.writeFile



// fs.writeFile("profile.txt","Hi my name is sameer mishra.",function(err){
//     if(err){
//         console.log(err)
//     }
//     fs.readFile("profile.txt","utf-8",function(err,data){
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }

//     })
// })

// 3 appendFile--append the content at the end of file

// fs.appendFile("profile.txt","I am full satck developer.",function(err){
//     if(err){
//         console.log(err)
//     }
//     fs.readFile("profile.txt","utf-8",function(err,data){
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }

//     })
// })

// 4 delete a file unLink

fs.unlink("demo.txt",function(err){
    if(err){
        console.log(err)
    }
    console.log("file deleted successfully")
})


// error first call back function

