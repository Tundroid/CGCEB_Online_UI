window.addEventListener("scroll", function() {
    const header = document.getElementById("landing_header");
    if (window.scrollY > 100) {
        header.classList.add("bg-white", "shadow-md"); // Customize styles as desired
    } else {
        header.classList.remove("bg-white", "shadow-md");
    }
});

function validate_password() {
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retype_password").value;

    if (password === retypePassword) {
        return true; // Allow form submission
    } else {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }
}

function validate_credentials() {
    const password = document.getElementById("gceid").value;
    const retypePassword = document.getElementById("pwd").value;

    if (password === retypePassword) {
        return true; // Allow form submission
    } else {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }
}

function credential_check() {
    if (validate_password()) {
        alert("Sign in successful!")
        location.replace("trial.html");
            } else {
                alert("Invalid credentials. Please try again.");
                return false;
    }
}