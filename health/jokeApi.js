const api_url = "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

var xhr = new XMLHttpRequest();
xhr.open("GET", api_url);

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
    {
        var randomJoke = JSON.parse(xhr.responseText);

        if(randomJoke.type == "single")
        {
            // If type == "single", the joke only has the "joke" property
            alert(randomJoke.joke);
        }
        else
        {
            // If type == "single", the joke only has the "joke" property
            alert(randomJoke.setup);
            alert(randomJoke.delivery);
        }
    }
    else if(xhr.readyState == 4)
    {
        alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
    }
};

xhr.send();