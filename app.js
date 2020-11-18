const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

//shoeinput error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formcontrol error';
    const small = form.querySelector('small');
    small.innerText = message;
}

//show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formcontrol success';
}

//validate email

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//checkRequired
function checkrequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() == '') {
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input);
        }
    });


}

//event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(username.value);
    checkrequired([username, email, password, password2]);

});