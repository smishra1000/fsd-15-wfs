// glabal level
let todos = [];
// first create label element input element button element 
let label = document.createElement("label");
label.textContent="Enter todo Item name"
document.body.appendChild(label);

// create input box
let input =document.createElement("input");
input.type="text";
input.id="todo-input";
input.value=""
document.body.appendChild(input)

// create the button 
let addBtn = document.createElement("button");
addBtn.textContent="Add";
addBtn.id="add-btn";
document.body.appendChild(addBtn)
let ul = document.createElement("ul");
ul.id="todos-list"
document.body.appendChild(ul)

function addTodoItem(){
    // logic to add item 
    let todoInput = document.getElementById("todo-input").value
   if(todoInput!==""){
        todos.push(todoInput)
        console.log(todos)
        document.getElementById("todo-input").value=""
        displayToDos();
    }
   
}

// function displayToDos(){
//     // cretae dom then add data ther
//     ul.innerHTML="";
//     for(let i=0;i<todos.length;i++){
//         let li = document.createElement("li");
//         li.textContent=todos[i]
//         ul.appendChild(li)
//     }
//     document.body.appendChild(ul)

// }

// 2nd way of dipslay list item 
function displayToDos(){
    let todosList = document.getElementById("todos-list");
    todosList.innerHTML=""
    for(let i=0;i<todos.length;i++){
        let li = document.createElement("li");
        li.style.background="lightgrey"
        li.style.padding="10px"
        li.style.listStyle="none"
        li.style.margin="5px";
        li.innerHTML = todos[i]
        todosList.appendChild(li)
    }
   
}

addBtn.addEventListener("click",addTodoItem)