let nameInput = document.getElementById("name");
let emailput = document.getElementById("email");
let horario = document.getElementById("horario");

let myForm = document.getElementById("my-form");
let userList = document.getElementById("users", clicar);

myForm.addEventListener("submit", clicar);
function clicar(e){
    e.preventDefault();

    let itemLi = document.createElement("li");

    itemLi.appendChild(

    document.createTextNode(
        `${nameInput.value}`
    )
    )

    userList.appendChild(itemLi)
}
