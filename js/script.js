// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            feedback.textContent = 'Please fill in all fields.';
            feedback.style.color = 'red';
        } else if (!validateEmail(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.style.color = 'red';
        } else {
            feedback.textContent = 'Thank you for your message!';
            feedback.style.color = 'green';

            // Reset form after submission
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
