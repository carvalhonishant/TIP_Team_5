//Author: Nishant Carvalho
//StudentId: 105015672

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hardcoded username and password
    var hardcodedUsername = "tipteam5";
    var hardcodedPassword = "password123";

    if (username === hardcodedUsername && password === hardcodedPassword) {
        window.location.href = "quiz.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
