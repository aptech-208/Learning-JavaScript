//Consume API JSON Data Using Fetch API

fetch("../API-Soap-Rest/API.json")
    .then((response) => response.json())
    .then((data) => console.log(data));

//External API JSON Data Using Fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));