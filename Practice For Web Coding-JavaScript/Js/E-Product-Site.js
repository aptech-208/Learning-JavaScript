const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
document.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});