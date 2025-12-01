const btn = document.querySelector("#btn");
const content = document.querySelectorAll(".content")[0];

btn.addEventListener("click", function () {
    content.classList.toggle("content");
})