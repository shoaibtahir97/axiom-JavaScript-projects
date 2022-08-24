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

function checkRequired(inputArray) {
    inputArray.forEach(function(input){
       if(input.value === ''){
            showFailure(input, `${getFieldId(input)} is required`)
       }
    })
}

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if(input.value.length < min){
        showFailure(input, `${getFieldId(input)} should be at least ${min} characters`)
    }else if( input.value.length > max ){
        showFailure(input, `${getFieldId(input)} should be less than ${max}`)
    }else{
        showSuccess(input)
    }
}


// Created and adddEventListener to prevent the page from reloading as the data is not saved
form.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 10);
    checkLength(password, 6, 30)
});


