const form = document.querySelector('button');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const messageElement = document.querySelectorAll('small')

function showErrorMessage(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    formControl.querySelector('small').innerText = message;
}

function showSuccessMessage(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.querySelector('small').innerText = '';
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkEmail(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(input.value.trim()))
        showErrorMessage(input, 'Invalid email')
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value)
        showErrorMessage(input2, 'Passwords is not match');
}

function checkLength(input, minLength, maxLength) {
    if (input.value.length > maxLength)
        showErrorMessage(input, `${getFieldName(input)} must be less than ${maxLength}`);
    else if (input.value.length < minLength)
        showErrorMessage(input, `${getFieldName(input)} must be greater than ${minLength}`);
    else
        showSuccessMessage(input);
}

function checkRequired(inputArr) {
    var flag = true;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showErrorMessage(input, `${getFieldName(input)} is required`)
            flag = false;
        }
        else
            showSuccessMessage(input);
    })
    return flag;
}

form.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkRequired([username, email, password, confirmPassword])) {
        checkEmail(email);
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkPasswordsMatch(password, confirmPassword);
    }
})