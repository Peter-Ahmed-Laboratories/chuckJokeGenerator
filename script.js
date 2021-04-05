// init

// make initial query for joke
const jokeQuery = () => {
  fetch("https://api.icndb.com/jokes/random?limitTo=[nerdy]")
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      //clear jokefield
      document.querySelector("#jokeResponse").innerHTML = "";

      // filter joke for "&quot;"
      const filteredJoke = jsonResponse.value.joke.replace(/&quot;/g, '"');

      // display joke
      document.querySelector("#jokeResponse").append(filteredJoke);
    });
};

// listen for button click for new joke
