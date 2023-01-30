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

prodBar.onclick = function () {
        let currColor = window.getComputedStyle(prodBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(82, 66, 43, 0.6)')
        {
                prodBar.style.backgroundColor = "rgb(50,136,213, 0.8)";
                prod.style.setProperty('opacity', opacityValue);
        }
        else
        {
                prodBar.style.backgroundColor = "rgba(82, 66, 43, 0.6)";
                prod.style.setProperty('opacity', 0.6);
        }
};

randsongBar.onclick = function () {
        let currColor = window.getComputedStyle(randsongBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(82, 66, 43, 0.6)')
        {
                randsongBar.style.backgroundColor = "rgb(50,136,213, 0.8)";
                randsong.style.setProperty('opacity', opacityValue);
        }
        else
        {
                randsongBar.style.backgroundColor = "rgba(82, 66, 43, 0.6)";
                randsong.style.setProperty('opacity', 0.6);
        }
};

todolistBar.onclick = function () {
        let currColor = window.getComputedStyle(todolistBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(82, 66, 43, 0.6)')
        {
                todolistBar.style.backgroundColor = "rgb(50,136,213, 0.8)";
                todolist.style.setProperty('opacity', opacityValue);
        }
        else
        {
                todolistBar.style.backgroundColor = "rgba(82, 66, 43, 0.6)";
                todolist.style.setProperty('opacity', 0.6);
        }
};

//Not needed because these are templates to show off the COMING SOON stuff.
/*placeholder2.onclick = function () {
        let currColor = window.getComputedStyle(placeholder2, null).getPropertyValue('background-color');
        if (currColor == 'rgba(82, 66, 43, 0.6)')
        {
                placeholder2.style.backgroundColor = "rgb(50,136,213, 0.8)";
                placeholder1.style.setProperty('opacity', opacityValue);
        }
        else
        {
                placeholder2.style.backgroundColor = "rgba(82, 66, 43, 0.6)";
                placeholder1.style.setProperty('opacity', 0.6);
        }
};

placeholder4.onclick = function () {
        let currColor = window.getComputedStyle(placeholder4, null).getPropertyValue('background-color');
        if (currColor == 'rgba(82, 66, 43, 0.6)')
        {
                placeholder4.style.backgroundColor = "rgb(50,136,213, 0.8)";
                placeholder3.style.setProperty('opacity', opacityValue);
        }
        else
        {
                placeholder4.style.backgroundColor = "rgba(82, 66, 43, 0.6)";
                placeholder3.style.setProperty('opacity', 0.6);
        }
};

placeholder6.onclick = function () {
        let currColor = window.getComputedStyle(placeholder6, null).getPropertyValue('background-color');
        if (currColor == 'rgba(82, 66, 43, 0.6)')
        {
                placeholder6.style.backgroundColor = "rgb(50,136,213, 0.8)";
                placeholder5.style.setProperty('opacity', opacityValue);
        }
        else
        {
                placeholder6.style.backgroundColor = "rgba(82, 66, 43, 0.6)";
                placeholder5.style.setProperty('opacity', 0.6);
        }
};*/




