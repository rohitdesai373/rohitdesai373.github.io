// dark-mode.js

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is already enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.classList.add('dark-mode');
    }

    toggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        toggle.classList.toggle('dark-mode');

        // Save dark mode preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
