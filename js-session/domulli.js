// 1. getusers function 

async function getUsers(){
   let users = await  fetch("https://jsonplaceholder.typicode.com/users")
   let result = await users.json()
   displayUsersInList(result)
}

getUsers();

function displayUsersInList(results){
    let ul = document.createElement("ul");

    for(let i=0;i<results.length;i++){
        let li = document.createElement("li");
        li.dataset.index=i;
        li.style.background="grey";
        li.style.padding='10px';
        li.style.margin='5px'
        li.style.listStyle="none"
        li.textContent=results[i].id + " " + results[i].name + " "  + results[i].email
        ul.appendChild(li)
    }
    document.body.appendChild(ul)

}