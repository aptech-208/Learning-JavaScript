console.log("Error-404");

setTimeout(() => {
    console.log("Error-402");
}, 100);

console.log("Error-400");

let rror = "Error-202";
let type = "";

// Example of Asynchronous Code Without Promise

// setTimeout(() => {
//     type = "Client-Side";
// }, 3000);

// console.log(rror + type);

// Example of Asynchronous Code With Promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Client-Side");
    }, 3000);
});

const displayError = async () => {
    type = await promise;
    console.log(rror + " " + type);
}

displayError();