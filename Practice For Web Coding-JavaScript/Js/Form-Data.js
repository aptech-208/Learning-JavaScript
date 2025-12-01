const Form = document.querySelector("#Form");
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const Checkbox = document.querySelector("#Checkbox");
const Disout = document.querySelector("#Disout");
const email = "qwerty";
const password = "123";
console.log(Form)

Form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(Email.value);
    console.log(Password.value);

    Disout.innerHTML = Email.value + Password.value

    Email.value = "";
    Password.value = "";

    if (Email == email && Password == password) {
        alert ("You Have Successfully Logged In");
    } 
    else {
        alert("Error Finding Your Credentials");
    }
});
