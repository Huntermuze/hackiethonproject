var prod = document.getElementById('prod-card');
var prodBar = document.getElementById('prod-bar');

var pl1 = document.getElementById('pl1');
var pl2 = document.getElementById('pl2');
var pl3 = document.getElementById('pl3');
var pl4 = document.getElementById('pl4');
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

pl1.onclick = function () {
        pl2.style.backgroundColor = "rgb(65, 225, 65)";
        pl1.style.setProperty('opacity', opacityValue);
};

pl3.onclick = function () {
        pl4.style.backgroundColor = "rgb(65, 225, 65)";
        pl3.style.setProperty('opacity', opacityValue);
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




