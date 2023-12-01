let users = [];
let header = ['Name','Email','Phone']
// write the logic here
function getusers() {
    return new Promise(function (resolve, reject) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(function(json){
                let users = json.map(function (item) {
                    return {
                        name: item.name,
                        email: item.email,
                        phone: item.phone,
                    }
                })
                resolve(users)
        })
})

}

getusers().then(function (data) {
    displayUsersInTable(data);
})


function displayUsersInTable(data) {
    // write the logic here
    let table = document.createElement("table");
    table.border = "2";
    // creating table header 
    let thead = document.createElement("thead")
    let headerRow = document.createElement('tr')
    for(let i=0;i<header.length;i++){
        let th = document.createElement('th')
        th.textContent=header[i]
        headerRow.appendChild(th)
    }
    thead.appendChild(headerRow)
    table.appendChild(thead)
    // end of table header


    // creation of body element
    let tbody = document.createElement('tbody');
    table.appendChild(tbody)
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr)
        let user = data[i]
        for (let key in user) {
            let td = document.createElement("td");
            td.textContent = user[key]
            tr.appendChild(td)
        }
    }
    // end of body element

    document.body.appendChild(table)
}

