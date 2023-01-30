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

var workoutGen = document.getElementById('workoutGen');
var workoutGenBar = document.getElementById('workoutGenBar');
const opacityValue = 1.0;

jokeBar.onclick = function () {
        let currColor = window.getComputedStyle(jokeBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.7)')
        {
                jokeBar.style.backgroundColor = "rgb(56,214,171)";
                joke.style.setProperty('opacity', opacityValue);
        }
        else
        {
                jokeBar.style.backgroundColor = "rgba(74, 145, 226, 0.7)";
                joke.style.setProperty('opacity', 0.5);
        }
};

quoteBar.onclick = function () {
        let currColor = window.getComputedStyle(quoteBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.7)')
        {
                quoteBar.style.backgroundColor = "rgb(56, 214, 171)";
                quote.style.setProperty('opacity', opacityValue);
        }
        else
        {
                quoteBar.style.backgroundColor = "rgba(74, 145, 226, 0.7)";
                quote.style.setProperty('opacity', 0.5);
        }
};

weatherBar.onclick = function () {
        let currColor = window.getComputedStyle(weatherBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.7)')
        {
                weatherBar.style.backgroundColor = "rgb(56, 214, 171)";
                weather.style.setProperty('opacity', opacityValue);
        }
        else
        {
                weatherBar.style.backgroundColor = "rgba(74, 145, 226, 0.7)";
                weather.style.setProperty('opacity', 0.5);
        }
};

screentimeBar.onclick = function () {
        let currColor = window.getComputedStyle(screentimeBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.7)')
        {
                screentimeBar.style.backgroundColor = "rgb(56, 214, 171)";
                screentime.style.setProperty('opacity', opacityValue);
        }
        else
        {
                screentimeBar.style.backgroundColor = "rgba(74, 145, 226, 0.7)";
                screentime.style.setProperty('opacity', 0.5);
        }
};

darkmodeBar.onclick = function () {
        let currColor = window.getComputedStyle(darkmodeBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.7)')
        {
                darkmodeBar.style.backgroundColor = "rgb(56, 214, 171)";
                darkmode.style.setProperty('opacity', opacityValue);
        }
        else
        {
                darkmodeBar.style.backgroundColor = "rgba(74, 145, 226, 0.7)";
                darkmode.style.setProperty('opacity', 0.5);
        }
};


workoutGenBar.onclick = function () {
        let currColor = window.getComputedStyle(workoutGenBar, null).getPropertyValue('background-color');
        if (currColor == 'rgba(74, 145, 226, 0.7)')
        {
                workoutGenBar.style.backgroundColor = "rgb(56, 214, 171)";
                workoutGen.style.setProperty('opacity', opacityValue);
        }
        else
        {
                workoutGenBar.style.backgroundColor = "rgba(74, 145, 226, 0.7)";
                workoutGen.style.setProperty('opacity', 0.5);
        }
};




