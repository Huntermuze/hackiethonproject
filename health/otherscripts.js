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

jokeBar.onclick = function () {
        let currColor = window.getComputedStyle(jokeBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.6)')
        {
                jokeBar.style.backgroundColor = "rgb(56, 214, 171, 0.8)";
                joke.style.setProperty('opacity', opacityValue);
        }
        else
        {
                jokeBar.style.backgroundColor = "rgba(74, 145, 226, 0.6)";
                joke.style.setProperty('opacity', 0.6);
        }
};

quoteBar.onclick = function () {
        let currColor = window.getComputedStyle(quoteBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.6)')
        {
                quoteBar.style.backgroundColor = "rgb(56, 214, 171, 0.8)";
                quote.style.setProperty('opacity', opacityValue);
        }
        else
        {
                quoteBar.style.backgroundColor = "rgba(74, 145, 226, 0.6)";
                quote.style.setProperty('opacity', 0.6);
        }
};

weatherBar.onclick = function () {
        let currColor = window.getComputedStyle(weatherBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.6)')
        {
                weatherBar.style.backgroundColor = "rgb(56, 214, 171, 0.8)";
                weather.style.setProperty('opacity', opacityValue);
        }
        else
        {
                weatherBar.style.backgroundColor = "rgba(74, 145, 226, 0.6)";
                weather.style.setProperty('opacity', 0.6);
        }
};

screentimeBar.onclick = function () {
        let currColor = window.getComputedStyle(screentimeBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.6)')
        {
                screentimeBar.style.backgroundColor = "rgb(56, 214, 171, 0.8)";
                screentime.style.setProperty('opacity', opacityValue);
        }
        else
        {
                screentimeBar.style.backgroundColor = "rgba(74, 145, 226, 0.6)";
                screentime.style.setProperty('opacity', 0.6);
        }
};

darkmodeBar.onclick = function () {
        let currColor = window.getComputedStyle(darkmodeBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.6)')
        {
                darkmodeBar.style.backgroundColor = "rgb(56, 214, 171, 0.8)";
                darkmode.style.setProperty('opacity', opacityValue);
        }
        else
        {
                darkmodeBar.style.backgroundColor = "rgba(74, 145, 226, 0.6)";
                darkmode.style.setProperty('opacity', 0.6);
        }
};

placeholder6.onclick = function () {
        let currColor = window.getComputedStyle(placeholder6, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.6)')
        {
                placeholder6.style.backgroundColor = "rgb(56, 214, 171, 0.8)";
                placeholder5.style.setProperty('opacity', opacityValue);
        }
        else
        {
                placeholder6.style.backgroundColor = "rgba(74, 145, 226, 0.6)";
                placeholder5.style.setProperty('opacity', 0.6);
        }
};




