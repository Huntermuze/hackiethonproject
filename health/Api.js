//JOKE API CODE BELOW
const api_url = "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
function getJoke() {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", api_url);   

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status < 300)
        {
            var randomJoke = JSON.parse(xhr.responseText);
    
            if(randomJoke.type == "single")
            {
                document.getElementById("joke").innerHTML = randomJoke.joke;
            }
            else
            {
                document.getElementById("joke").innerHTML = randomJoke.setup + "<br><br>" + randomJoke.delivery;
            }
        }
        else if(xhr.readyState == 4)
        {
            alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
        }
    };
    
    xhr.send();
};

//QUOTE API CODE BELOW

function getQuote() {

    var request = new XMLHttpRequest();

    request.open('GET', 'https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    
    request.setRequestHeader('Accept', 'application/json');
    
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        var json = JSON.parse(this.responseText)
        document.getElementById("quote").innerHTML = json.quotes[0].text;
        document.getElementById("quote-author").innerHTML = "Author: " + json.quotes[0].author;
      }
    };
    
    request.send();
}



//WEATHER API CODE BELOW

const mapsKey = "AIzaSyBoaOgoUiA8gxcbUsnNpbpG4XT3QX4GO7s"; 
var longitude;
var latitude;
var rain;
var snow;
var temperature;

function getWeather() {

    var inputValue = document.querySelector('#user-city');
    var weather_url = "http://api.weatherapi.com/v1/forecast.json?key=f7d495448f004fd3a0661541210404&q=" + inputValue.value +"&days=1&aqi=no&alerts=no";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", weather_url);   

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status < 300)
        {   //Retrieve's info from API
            var weather = JSON.parse(xhr.responseText);
            document.getElementById("w-name").innerHTML = weather["location"]["name"];
            document.getElementById("w-temp").innerHTML = weather["current"]["temp_c"] + "&#8451;";
            document.getElementById("w-rain").innerHTML = weather["forecast"]["forecastday"][0]["day"]["daily_chance_of_rain"] + "%";
            document.getElementById("w-snow").innerHTML = weather["forecast"]["forecastday"][0]["day"]["daily_chance_of_snow"] + "%";

            longitude = weather["location"]["lon"];
            latitude = weather["location"]["lat"];
            rain = weather["forecast"]["forecastday"][0]["day"]["daily_chance_of_rain"];
            snow = weather["forecast"]["forecastday"][0]["day"]["daily_chance_of_snow"];
            temperature = weather["current"]["temp_c"];

            // To determine if person should go out or not
            if(rain<=60 && snow<=60 && 10<=temperature<=40) {
                document.getElementById("outcome").innerHTML = "It's a fine weather to go outside for a walk!"
            }
            else {
                document.getElementById("outcome").innerHTML = "Tough luck, best to stay home and stay snug!"
            }

            
            //Setup for init map
            var script = document.createElement('script');
            script.src = 'http://maps.googleapis.com/maps/api/js?key='+ mapsKey +'&callback=initMap';
            script.async = true;
            document.head.appendChild(script);
            
        }
        else if(xhr.readyState == 4)
        {
            alert("Error while requesting weather.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
        }
    };
    
    xhr.send();
};
//drawing of map
function initMap() {
                
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: latitude,
            lng: longitude
        }
    });

    new google.maps.Marker({
        position: {
            lat: latitude,
            lng: longitude
        },
        map,
      });
};


