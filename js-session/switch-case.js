// let n = 10;

// switch(n){
//     case 1:
//         console.log("number is 1")
//         break;
//     case 2:
//         console.log("number is 2")
//         break;
//     case 3:
//         console.log("number is 3") 
//         break;  
//     default:
//         console.log("something otehr number")         
// }

// wap toc ehck number is even or odd

// let n = Number(prompt("input any number"))
// switch(n%2){
//     case 0:
//         console.log("number is even")
//         break;
//     case 1:
//         console.log("number is odd")
//         break;
// }

// wap to check number is positive negative or zero using swaitch case
// let number = 0;

// switch (true) {
//   case number > 0:
//     console.log("The number is positive");
//     break;
//   case number < 0:
//     console.log("The number is negative");
//     break;
//   case number === 0:
//     console.log("The number is zero");
//     break;
//   default:
//     console.log("Invalid number");
// }
// let n = Number(prompt("input any number"))
// switch (n) {
//     case n < 0:
//          console.log("num id negative")                                                                
//     break;
//     case n > 0:
//          console.log("num is positive")                                                                
//     break; 
//     case n === 0:
//          console.log("num is zero")                                                                     
//     break;
//     default:
//         console.log("number")
//         break;
// }

let num = -8;
switch(num>0){
    case true:
        console.log("number is psoitive")
        break;
    case false:
        switch(num===0){
            case true:
                console.log("number is zero")
                break;
            case false:
                console.log("number is negative")
                break;    
        }
}



