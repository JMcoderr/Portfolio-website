// script.js

// Event listener for light mode button
document.getElementById('light-mode').addEventListener('click', function() {
    // Remove dark theme class and add light theme class
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.add('light-theme');
    // Save the theme preference to localStorage
    localStorage.setItem('theme', 'light');
});

// Event listener for dark mode button
document.getElementById('dark-mode').addEventListener('click', function() {
    // Remove light theme class and add dark theme class
    document.documentElement.classList.remove('light-theme');
    document.documentElement.classList.add('dark-theme');
    // Save the theme preference to localStorage
    localStorage.setItem('theme', 'dark');
});

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        // Add the saved theme class to the document element
        document.documentElement.classList.add(savedTheme + '-theme');
    } else {
        // Default to light theme if no preference is saved
        document.documentElement.classList.add('light-theme');
    }
});

// Hide the loading spinner once the page has fully loaded
window.addEventListener('load', function() {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'none';
});

// Show/hide back-to-top button
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example: Log form data to the console (replace this with your form submission logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form
    document.getElementById('contact-form').reset();

    // Show a success message (optional)
    alert('Thank you for your message!');
});