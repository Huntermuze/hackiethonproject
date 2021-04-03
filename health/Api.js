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
                document.getElementById("joke").innerHTML = randomJoke.setup + "\n"+ randomJoke.delivery;
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
        document.getElementById("quote-author").innerHTML = json.quotes[0].author;
      }
    };
    
    request.send();
}

//WEATHER API CODE BELOW

const APIKEY = "c0c7ea2535a2adfcbeab069590cc5a32"
('api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid='+ APIKEY)

//class fetch {
//    async getCurrent(input)
//}




var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid='+ APIKEY)
    .then(response => response.json())
    .then(data => console.log(data))
.catch(err => alert("Not a valid City!"))
}); 
