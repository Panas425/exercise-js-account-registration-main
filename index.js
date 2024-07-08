
const registrationData = {
    name: "first name last name",
    username: "username",
    email: "email@email.com",
    password: "password",
};

const name = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpassword");
const submitButton = document.querySelector("button");

let passwordsMatch = "";

name.addEventListener("change", function(event){
    registrationData.name = name.value;
    console.log(registrationData.name)
    toggleClass(name, 'valid', 'invalid', name.value);
    checkfilled()
})
username.addEventListener("input", function(event){
    let rUsername = username.value;
    registrationData.username = rUsername;
    console.log(registrationData.user)
    toggleClass(username, 'valid', 'invalid', rUsername);
    checkfilled()
})
email.addEventListener("input", function(event){
    let rEmail = email.value;
    registrationData.email = rEmail;
    toggleClass(email, 'valid', 'invalid', rEmail);
    checkfilled()
})
password.addEventListener("input", function(event){
    let rPassword = password.value;
    registrationData.password = rPassword;
    toggleClass(password, 'valid', 'invalid', rPassword.length > 8);
    checkfilled()
})
confirmPassword.addEventListener("input", function(event){
    passwordsMatch = password.value === confirmPassword.value;
    toggleClass(confirmPassword, 'valid', 'invalid', confirmPassword.value.length > 8 && passwordsMatch)
    checkfilled()
})






document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();

    console.log(registrationData);
})

function checkfilled(){
const allFieldsFilled = registrationData.name && registrationData.username && registrationData.email && registrationData.password && confirmPassword.value;
const passwordLengthValid = password.value.length > 8 && confirmPassword.value.length > 8;

console.log(allFieldsFilled)


if((allFieldsFilled && passwordsMatch && passwordLengthValid)){
    submitButton.disabled = false;
    submitButton.classList.remove('disabled');
    submitButton.classList.add('enabled');
}else {
    submitButton.disabled = true;
    submitButton.classList.remove('enabled');
    submitButton.classList.add('disabled');
}

}

function toggleClass(element, validClass, invalidClass, condition) {
    if (condition) {
        element.classList.add(validClass);
        element.classList.remove(invalidClass);
    } else {
        element.classList.add(invalidClass);
        element.classList.remove(validClass);
    }
}