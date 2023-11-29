// dom api ---- how to access element from dom
// 1. getElementById--

// let fname = document.getElementById("fname").value
// console.log(fname)

// let box = document.getElementById("box")
// console.log(box)
// box.style.background="red"

// 2. getElementsByClassName

// let boxes = document.getElementsByClassName("login-box")
// console.log(boxes)
// for(let i=0;i<boxes.length;i++){
//     boxes[i].style.width="100px"
//     boxes[i].style.height="100px"
//     boxes[i].style.background="green"
//     boxes[i].style.margin="10px"
// }

// 3. getElementsByTagName


// let boxesByTag = document.getElementsByTagName("div")

// console.log(boxesByTag)

// 4 getElementsByName 

// let input = document.getElementsByName("fname")

// console.log(input)

// function showData(){
//     let fname = document.getElementById("fname").value
//     let lname= document.getElementById("lname").value
//     console.log("value enterd =",fname,lname)
// }

// function changeColor(){
//     let colorName = document.getElementById("colorname").value
//     let box = document.getElementById("color-box")
//     box.style.background=colorName

// }

//5 querySelector

let list = document.querySelector("ul li")
console.log(list)
list.style.background="green"

//6 querySelectorAll

let lists = document.querySelectorAll("ul li")
console.log(lists)

for(let i=0;i<lists.length;i++){
    lists[i].style.color="red"
}