function isLetters(str) {
    const regex = /^[\p{L}]+$/u;
    return regex.test(str);
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validation = () => {
    const vfirstName = firstName.value.trim();
    const vsurname = surname.value.trim();
    const vUsername = username.value.trim();
    const vEmail = email.value.trim();
    const VPW = password.value.trim();
    const vCPW = confirmPassword.value.trim();

    if (vfirstName === '') {
        setError(firstName, 'First name is required');
    } else if (!isLetters(vfirstName)) {
        setError(firstName, 'Invalid input, only letters allowed');
    } else {
        setSuccess(firstName);
    }

    if (vsurname === '') {
        setError(surname, 'Surname is required');
    } else if (!isLetters(vsurname)) {
        setError(surname, 'Invalid input, only letters allowed');
    } else {
        setSuccess(surname);
    }

    if (vUsername === '') {
        setError(username, 'Username is required');
    } else if (vUsername.indexOf(' ') !== -1) {
        setError(username, 'Invalid input, no spaces allowed');
    } else {
        setSuccess(username);
    }

    if (vEmail === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(vEmail)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    // password valdation
    if (VPW === '') {
        setError(password, 'Password is required');
    } else if (vCPW === '') {
        setError(confirmPassword, 'Confirm password is required');
        setSuccess(password);
    } else if (vCPW !== VPW) {
        setError(confirmPassword, 'Passwords do not match');
        setSuccess(password);
    } else {
        
        setSuccess(confirmPassword);
    }
};
