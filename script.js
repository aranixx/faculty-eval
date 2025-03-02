// Switch to Register Form
function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

// Switch to Login Form
function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Register Function
function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;
    
    if (username === "" || password === "") {
        document.getElementById("register-error").innerText = "Please fill out all fields!";
        return;
    }

    alert("Registration successful! You can now log in.");
    showLogin();
}

// Login Function
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        document.getElementById("login-error").innerText = "Please fill out all fields!";
        return;
    }

    alert("Login successful!");
}
