// init

      // make initial query for joke
      const jokeQuery = () => {
        fetch("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
          .then((response) => {
            return response.json();
          })
          .then((jsonResponse) => {
               
            //clear jokefield
            document.querySelector('#jokeResponse').innerHTML = '';
            
            // display joke
              document.querySelector('#jokeResponse').append(jsonResponse.value.joke);

              
          });
      };

     

      // listen for button click for new joke