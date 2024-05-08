//Author: Nishant Carvalho
//StudentId: 105015672


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve job reference number from session storage
    var jobReference = sessionStorage.getItem('jobReference') || localStorage.getItem('jobReference');
    // Check if job reference number exists
    if (jobReference) {
        // Populate the job reference field in the form
        document.getElementById('jobReference').value = jobReference;
    }

    // Add event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        document.getElementById('errorMessages').innerHTML = '';

        // Get form values
        var dob = document.getElementById('dob').value;
        var state = document.getElementById('state').value;
        var postcode = document.getElementById('postcode').value;
        var otherSkills = document.getElementById('otherSkills').value;
        var skills = document.getElementsByName('skills');

        // Array to store error messages
        var errors = [];

        // Validate DOB
        var dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dobRegex.test(dob)) {
            errors.push("Date of Birth must be in dd/mm/yyyy format.");
        }
        var dobParts = dob.split('/');
        var birthDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
        var age = calculateAge(birthDate);
        if (age < 15 || age > 80) {
            errors.push("Applicants must be between 15 and 80 years old.");
        }

        // Validate postcode and state 
        var statePostcodeMap = {
            'VIC': ['3', '8'],
            'NSW': ['1', '2'],
            'QLD': ['4', '9'],
            'NT': ['0'],
            'WA': ['6'],
            'SA': ['5'],
            'TAS': ['7'],
            'ACT': ['0']
        };
        if (!statePostcodeMap[state].includes(postcode.charAt(0))) {
            errors.push("Postcode does not match selected state.");
        }

        // Validate other skills
        var otherSkillsChecked = false;
        for (var i = 0; i < skills.length; i++) {
            if (skills[i].value === 'Other' && skills[i].checked) {
                otherSkillsChecked = true;
                break;
            }
        }
        if (otherSkillsChecked && otherSkills.trim() === '') {
            errors.push("Other Skills cannot be blank if selected.");
        }

        // Display all error messages
        if (errors.length > 0) {
            for (var i = 0; i < errors.length; i++) {
                showError(errors[i]);
            }
            return;
        }

        // Save user details in session storage
        var userDetails = {
            dob: dob,
            state: state,
            postcode: postcode,
            otherSkills: otherSkills,
            skill: userDetails ? userDetails.skill : null // Preserve existing skill if it exists
        };
        sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
        // Also save user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // If all validations are valid, submit the form
        document.getElementById('registrationForm').submit();
    });
});

function showError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    document.getElementById('errorMessages').appendChild(errorDiv);
}

function calculateAge(birthDate) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
