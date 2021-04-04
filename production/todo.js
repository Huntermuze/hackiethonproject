let addToDoButton = document.getElementById('addToDoBtn');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let taskTitle = document.getElementById('taskBoardTitle');
var taskCount = 0;

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    if (inputField.value !== "" && inputField.value !== " ")
    {
        paragraph.innerText = "• " + inputField.value;
        toDoContainer.appendChild(paragraph);
        paragraph.style.color = "white";
        paragraph.style.fontFamily = "Lato";
        inputField.value = "";
        ++taskCount;
        taskTitle.innerHTML = "Tasks Board (" + taskCount + ")";
    }

    paragraph.addEventListener('click', function(){
        if (paragraph.style.textDecoration == "line-through") {
            paragraph.style.textDecoration = "";
            paragraph.style.color = "white";
        } else if (paragraph.style.textDecoration == "") {
            paragraph.style.textDecoration = "line-through";
            paragraph.style.color = "rgb(0, 0, 0)";
        } else {
            console.log(paragraph.style.textDecoration);
        }
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
        --taskCount;
        taskTitle.innerHTML = "Tasks Board (" + taskCount + ")";
    })
})