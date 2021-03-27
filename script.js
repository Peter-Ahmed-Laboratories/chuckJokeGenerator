// init

      // make initial query for joke
      const jokeQuery = () => {
        fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
          .then((response) => {
            return response.json();
          })
          .then((jsonResponse) => {
              
              document.querySelector('#jokeResponse').append(jsonResponse.value.joke);

              
          });
      };

      // display joke

      // listen for button click for new joke