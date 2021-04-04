var joke = document.getElementById('joke-card');
var jokeBar = document.getElementById('joke-bar');
var quote = document.getElementById('quote-card');
var quoteBar = document.getElementById('quote-bar');
var weather = document.getElementById('weather-card');
var weatherBar = document.getElementById('weather-bar');
var screentime = document.getElementById('screentime');
var screentimeBar = document.getElementById('screentimeBar');
var darkmode = document.getElementById('darkmode');
var darkmodeBar = document.getElementById('darkmodeBar');

var placeholder5 = document.getElementById('pl5');
var placeholder6 = document.getElementById('pl6');
const opacityValue = 1.0;

joke.onclick = function () {
        jokeBar.style.backgroundColor = "rgb(56,214,171,0.6)";
        joke.style.setProperty('opacity', opacityValue);
};

quote.onclick = function () {
        quoteBar.style.backgroundColor = "rgb(56,214,171,0.6)";
        quote.style.setProperty('opacity', opacityValue);
};

weather.onclick = function () {
        weatherBar.style.backgroundColor = "rgb(56,214,171,0.6)";
        weather.style.setProperty('opacity', opacityValue);
};

screentime.onclick = function () {
        screentimeBar.style.backgroundColor = "rgb(56,214,171,0.6)";
        screentime.style.setProperty('opacity', opacityValue);
};

darkmode.onclick = function () {
        darkmodeBar.style.backgroundColor = "rgb(56,214,171,0.6)";
        darkmode.style.setProperty('opacity', opacityValue);
};

placeholder5.onclick = function () {
        placeholder6.style.backgroundColor = "rgb(56,214,171,0.6)";
        placeholder5.style.setProperty('opacity', opacityValue);
};




