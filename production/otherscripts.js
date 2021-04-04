var prod = document.getElementById('prod-card');
var prodBar = document.getElementById('prod-bar');
var randsong = document.getElementById('randsong');
var randsongBar = document.getElementById('randsongBar');
var todolist = document.getElementById('todolist');
var todolistBar = document.getElementById('todolistBar');

var placeholder1 = document.getElementById('pl5');
var placeholder2 = document.getElementById('pl6');
var placeholder3 = document.getElementById('pl7');
var placeholder4 = document.getElementById('pl8');
var placeholder5 = document.getElementById('pl9');
var placeholder6 = document.getElementById('pl10');
const opacityValue = 1.0;

prod.onclick = function () {
        prodBar.style.backgroundColor = "rgb(65, 225, 65)";
        prod.style.setProperty('opacity', opacityValue);
};

randsong.onclick = function () {
        randsongBar.style.backgroundColor = "rgb(65, 225, 65)";
        randsong.style.setProperty('opacity', opacityValue);
};

todolist.onclick = function () {
        todolistBar.style.backgroundColor = "rgb(65, 225, 65)";
        todolist.style.setProperty('opacity', opacityValue);
};

placeholder1.onclick = function () {
        placeholder2.style.backgroundColor = "rgb(65, 225, 65)";
        placeholder1.style.setProperty('opacity', opacityValue);
};

placeholder3.onclick = function () {
        placeholder4.style.backgroundColor = "rgb(65, 225, 65)";
        placeholder3.style.setProperty('opacity', opacityValue);
};

placeholder5.onclick = function () {
        placeholder6.style.backgroundColor = "rgb(65, 225, 65)";
        placeholder5.style.setProperty('opacity', opacityValue);
};




