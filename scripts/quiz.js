//Author: Nishant Carvalho
//StudentId: 105015672

document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var quizForm = document.getElementById("quizForm");

    // Add submit event listener to the form
    quizForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Check if any question is not attempted
        var allQuestionsAttempted = checkAllQuestionsAttempted();

        if (allQuestionsAttempted) {
            // If all questions are attempted, alert the user that the quiz has been submitted successfully
            alert("Quiz submitted successfully!");
            // Redirect the user to index.html
            window.location.href = "index.html";
        } else {
            // If any question is not attempted, alert the user
            alert("Please attempt all the questions before submitting the quiz.");
        }
    });

    // Function to check if any question is not attempted
    function checkAllQuestionsAttempted() {
        // Get all radio button groups (questions)
        var questionGroups = document.querySelectorAll("fieldset ol li");
        var allQuestionsAttempted = true;

        // Loop through each question group
        questionGroups.forEach(function(questionGroup) {
            // Get all radio buttons in the current question group
            var radioButtons = questionGroup.querySelectorAll("input[type='radio']");

            // Check if any radio button in the current group is checked
            var anyChecked = Array.from(radioButtons).some(function(radioButton) {
                return radioButton.checked;
            });

            // If none of the radio buttons are checked, set allQuestionsAttempted to false
            if (!anyChecked) {
                allQuestionsAttempted = false;
                return;
            }
        });

        return allQuestionsAttempted;
    }
});

