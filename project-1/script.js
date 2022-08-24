// Getting all the input elements and storing them in variables
const form = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showFailure(input, message) { // Created showfailure function which accepts two parameters of input and message
    const formControl = input.parentElement; // target the form-control div and store in variable
    formControl.className = "form-control failure"; // Replacing the class of form control with failure class that we created in CSS    
    const small= formControl.querySelector("small")
    small.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())
}


// Created and adddEventListener to prevent the page from reloading as the data is not saved
form.addEventListener("submit", function(e){
    e.preventDefault();

    
});


