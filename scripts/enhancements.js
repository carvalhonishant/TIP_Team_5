//Author: Nishant Carvalho
//StudentId: 105015672

document.addEventListener('DOMContentLoaded', function() {
    // Check if the current page is quiz.html
    if (window.location.pathname.endsWith('quiz.html')) {
        // Set the time limit in minutes
        var timeLimit = 1;

        // Convert time limit to milliseconds
        var timeLimitMs = timeLimit * 60 * 1000;

        // Start the countdown
        var countdown = setInterval(function() {
            timeLimitMs -= 1000;
            if (timeLimitMs <= 0) {
                clearInterval(countdown);
                // Display warning message on the webpage
                var warningMessage = document.createElement('div');
                warningMessage.textContent = "Time's up! You will be redirected to the Login page.";
                warningMessage.classList.add('warning-message');
                document.body.appendChild(warningMessage);
                // Redirect to home page after a delay
                setTimeout(function() {
                    window.location.href = "login.html"; // Redirect to "login.html"
                }, 9000);
            }
        }, 1000);
    }
});
