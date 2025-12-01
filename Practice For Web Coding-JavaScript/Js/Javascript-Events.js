const btn = document.getElementById("#btnatj");
function custom() {
    console.log("Error Message")
}

const btnjs = document.querySelector("#btn");

btnjs.addEventListener("mouseover", function () {
    console.log("Mouse Hovering The Trigger");
})

const dropdown = document.querySelector("#drop");
dropdown.addEventListener("change", function () {
    let con = alert("You Chose Gender");
})

const text = document.querySelector("#txt");
text.addEventListener("keypress", function (w) {
    console.log(w.target.value);
})