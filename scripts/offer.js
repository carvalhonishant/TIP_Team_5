//Author: Nishant Carvalho
//StudentId: 105015672

document.addEventListener('DOMContentLoaded', function() {
    var applyLinks = document.querySelectorAll('a[data-job-reference]');
    applyLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var jobReference = event.target.getAttribute('data-job-reference');
            localStorage.setItem('jobReference', jobReference);
        });
    });
  });
  