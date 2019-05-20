fetch("http://localhost:3001/rest/v1/authors/")
   .then(response => {
      console.log(response);
   })
   .catch(error => console.log("Si è verificato un errore!"))