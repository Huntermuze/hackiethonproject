var joke = document.getElementById('joke-card');
var jokeBar = document.getElementById('joke-bar');
var quote = document.getElementById('quote-card');
var quoteBar = document.getElementById('quote-bar');
var weather = document.getElementById('weather-card');
var weatherBar = document.getElementById('weather-bar');

var placeholder1 = document.getElementById('pl1');
var placeholder2 = document.getElementById('pl2');
var placeholder3 = document.getElementById('pl3');
var placeholder4 = document.getElementById('pl4');
var placeholder5 = document.getElementById('pl5');
var placeholder6 = document.getElementById('pl6');
const opacityValue = 1.0;

joke.onclick = function () {
        jokeBar.style.backgroundColor = "rgb(65, 225, 65)";
        joke.style.setProperty('opacity', opacityValue);
};

quote.onclick = function () {
        quoteBar.style.backgroundColor = "rgb(65, 225, 65)";
        quote.style.setProperty('opacity', opacityValue);
};

weather.onclick = function () {
        weatherBar.style.backgroundColor = "rgb(65, 225, 65)";
        weather.style.setProperty('opacity', opacityValue);
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




