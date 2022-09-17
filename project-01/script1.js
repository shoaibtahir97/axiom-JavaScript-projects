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

    if(username.value === ""){
        showFailure(username, "Username is required")
    }else{
        showSuccess(username)
    }

    if(email.value === ""){
        showFailure(email, "Email is required")
    }
    else if(!isValidEmail(email.value)) {
        showFailure(email, "Email should be valid")
    }
    else{
        showSuccess(email)
    }

    if(password.value === ""){
        showFailure(password, "Password is required")
    }else{
        showSuccess(password)
    }

    if(password2.value === ""){
        showFailure(password2, "Confirm your password")
    }else{
        showSuccess(password2)
    }
});


