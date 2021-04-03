let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){
        if (paragraph.style.textDecoration == "line-through") {
            paragraph.style.textDecoration = "";
        } else if (paragraph.style.textDecoration == "") {
            paragraph.style.textDecoration = "line-through";
        } else {
            console.log(paragraph.style.textDecoration);
        }
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})