// 1. getusers function 
let results = []
let ul = document.createElement("ul");
function createSerachBoxAndButton() {
    let input = document.createElement("input");
    input.type = "text"
    input.id = "search-key"
    input.placeholder = "Please search by name id email"
    document.body.appendChild(input)
    let searchButton = document.createElement("button")
    searchButton.textContent = "Search"
    searchButton.addEventListener("click", searchUsers)
    document.body.appendChild(searchButton)

}

function searchUsers() {
    let searchkey = document.getElementById("search-key").value
    if (searchkey === "") {
        displayUsersInList(results)
    } else {
        let filteredUsers = results.filter(function (item) {
            return item.name.includes(searchkey) || item.email.includes(searchkey) || item.id === Number(searchkey)
        })
        displayUsersInList(filteredUsers)
    }
}

async function getUsers() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users")
    results = await users.json()
    displayUsersInList(results)
}
createSerachBoxAndButton();
getUsers();

function displayUsersInList(results) {
    ul.innerHTML = ""
    for (let i = 0; i < results.length; i++) {
        let li = document.createElement("li");
        li.dataset.index = i;
        li.style.background = "grey";
        li.style.padding = '10px';
        li.style.margin = '5px'
        li.style.listStyle = "none"
        li.textContent = results[i].id + " " + results[i].name + " " + results[i].email
        ul.appendChild(li)
    }
    document.body.appendChild(ul)

}

