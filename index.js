// Add your code here

function submitData(name, email) {
    // POST request to the server
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((response) => {
        // Handle the successful response
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Append the id from the response to the DOM
        const body = document.querySelector("body");
        const idElement = document.createElement("p");
        idElement.textContent = `User ID: ${data.id}`;
        body.appendChild(idElement);
      })
      .catch((error) => {
        // Handle any errors and append the error message to the DOM
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  