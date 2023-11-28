// script.js
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if the user has a preferred color scheme (light/dark)
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set initial mode based on user preference or light mode
    if (prefersDarkMode) {
        body.classList.add("dark-mode");
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});

