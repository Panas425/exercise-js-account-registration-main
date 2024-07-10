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

const validationConditions = {
    name: value => value,
    username: value => value,
    email: value => value,
    password: value => value.length > 8,
    cpassword: () => {
        const passwordsMatch = password.value === confirmPassword.value;
        return confirmPassword.value.length > 8 && passwordsMatch;

    }
};

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener('input', function(event) {
        const inputName = input.getAttribute('id');
        registrationData.inputName = input.value;
        const isValid = validationConditions[inputName](input.value);
        toggleClass(input, 'valid', 'invalid', isValid);

        if (inputName==='password'){
            toggleConfirmPassword(isValid)
        }
        
        checkfilled();
    });
});

function toggleConfirmPassword(enable) {
    confirmPassword.disabled = !enable;
}

//lyssnar på knappen
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert(JSON.stringify(registrationData, null, 2));
})

//kollar varje gång något skrivs i textrutorna om alla fällt är ifyllda
function checkfilled(){

const allFieldsFilled = registrationData.name && registrationData.username && registrationData.email && registrationData.password && confirmPassword.value;
const passwordLengthValid = password.value.length > 8 && confirmPassword.value.length > 8;

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

//ändrar klassen på textrutorna beroende på vad som har skrivits i de.
function toggleClass(element, validClass, invalidClass, condition) {
    if (condition) {
        element.classList.add(validClass);
        element.classList.remove(invalidClass);
    } else {
        element.classList.add(invalidClass);
        element.classList.remove(validClass);
    }
}

checkfilled();