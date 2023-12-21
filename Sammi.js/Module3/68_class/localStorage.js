// script.js

// Function to save username to localStorage
function saveUsername() {
    const usernameInput = document.querySelector('#usernameInput');
    const username = usernameInput.value;

    // Check if the username is not empty
    if (username.trim() !== '') {
        // Save the username to localStorage
        localStorage.setItem('username', username);

        // Display a message
        const outputDiv = document.querySelector('#output');
        outputDiv.textContent = `Username "${username}" saved to localStorage.`;

        // Clear the input field
        usernameInput.value = '';
    } else {
        alert('Please enter a valid username.');
    }
}

// Check if a username is already saved in localStorage
const savedUsername = localStorage.getItem('username');

if (savedUsername) {
    const outputDiv = document.querySelector('#output');
    outputDiv.textContent = `Welcome back, ${savedUsername}!`;
}
