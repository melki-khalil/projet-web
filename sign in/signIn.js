function isletters(ch) {
    const regex = /^[\p{L}]+$/u;
    return regex.test(ch);
}

function validateForm(event) {
    let isValid = true;

    // Get references to form inputs
    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');

    // Reset custom validity messages
    firstName.setCustomValidity("");
    surname.setCustomValidity("");
    username.setCustomValidity("");
    confirmPassword.setCustomValidity("");

    // Check if first name is valid
    if (!isletters(firstName.value)) {
        isValid = false;
        firstName.setCustomValidity("First name should contain letters only.");
    }

    // Check if surname is valid
    if (!isletters(surname.value)) {
        isValid = false;
        surname.setCustomValidity("Surname should contain letters only.");
    }

    // Check if username contains spaces
    if (username.value.indexOf(" ") !== -1) {
        isValid = false;
        username.setCustomValidity("Username should not contain spaces.");
    }

    // Check if password meets length requirement
    if (password.value.length < 8) {
        isValid = false;
        password.setCustomValidity("Password should be at least 8 characters long.");
    }

    // Check if password and confirm password match
    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.setCustomValidity("Passwords do not match.");
    }

    // If any validation failed, prevent form submission
    if (!isValid) {
        event.preventDefault();
        return false;
    }

    // If all validations pass, allow form submission
    return true;
}
