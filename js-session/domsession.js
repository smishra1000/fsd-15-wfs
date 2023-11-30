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

// let list = document.querySelector("ul li")
// console.log(list)
// list.style.background="green"

//6 querySelectorAll

// let lists = document.querySelectorAll("ul li")
// console.log(lists)

// for(let i=0;i<lists.length;i++){
//     lists[i].style.color="red"
// }

// create element and add it inside dom 

// let p = document.createElement("p")
// p.textContent="hello paragraph"
// p.style.color="red"
// p.style.fontSize="20px"
// document.body.appendChild(p)


// let div = document.createElement('div')
// div.id="box1"
// div.style.width="100px"
// div.style.height="100px"
// div.style.background="green"
// div.textContent="hello i am inside box"

// document.body.appendChild(div)

// let box1 = document.getElementById("box1");
// box1.insertAdjacentHTML("afterbegin",'<p>hiiii</p>')
// box1.insertAdjacentHTML("beforebegin","<p>hii i am here</p>")

// let box = document.createElement("div");
// box.id="box1"
// box.textContent="hii i am inside box"
// box.style.width="100px";
// box.style.height="100px";
// box.style.background="cyan";

// document.body.appendChild(box)

// function deletebox(){
// let box1 = document.getElementById("box1")
// document.body.removeChild(box1)
// }


// add tarributes and getattributes through dom 

// let btn  = document.createElement("button");
// btn.textContent="Login"
// btn.style.backgroundColor="blue"
// btn.style.color="#fff";
//  btn.classList.add("login-button","login-2")
//  btn.setAttribute("disabled",true)
// btn.setAttribute("class","login-btn")

// document.body.appendChild(btn)



// attach event listener on element 

let box = document.createElement("div")
box.textContent="hi i am box";
box.id="box1"
box.style.color="#fff";
box.style.background="#000";
box.style.width="100px";
box.style.height="100px";
document.body.appendChild(box);


// 2 button hide and show

let hideBtn = document.createElement("button");
let showBtn = document.createElement("button");

hideBtn.textContent="Hide";
showBtn.textContent="Show";
showBtn.style.background="red";
hideBtn.style.backgroundColor="blue"
showBtn.style.color="white";
hideBtn.style.color="white"
document.body.appendChild(showBtn);
document.body.appendChild(hideBtn);

// add event listener on button

function hideBox(){
    let box1 = document.getElementById("box1");
    box1.style.display="none"
}

function showBox(){
    let box1 = document.getElementById("box1");
    box1.style.display="block"
}

hideBtn.addEventListener("click",hideBox)
showBtn.addEventListener("click",showBox)

