window.onload = function() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var rating = document.getElementById("rating");
    var email = document.getElementById("email");

    function validatePassword() {
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    function validateEmail() {
        var pattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (!pattern.test(email.value)) {
            email.setCustomValidity('Please enter a valid byui.edu email address.');
        } else {
            email.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
    email.onchange = validateEmail;

    rating.oninput = function() {
        var x = document.createElement("P");  
        var t = document.createTextNode("Current Rating: " + this.value);  // Create a text node
        x.appendChild(t);  
        document.body.appendChild(x);  
    }
}
