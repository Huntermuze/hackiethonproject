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
      }
    };
    
    request.send();

    document.getElementById("quote").innerHTML = randomJoke.joke;
    document.getElementById("quote-author").innerHTML = randomJoke.joke;
    

}
