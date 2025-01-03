document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal'); // The login modal
    const openLogin = document.getElementById('openLogin'); // The login link
    const closeBtn = document.querySelector('.close-btn'); // Close button for modal
    const nav = document.querySelector('nav ul'); // The navigation bar

    // Check if the user is logged in (using localStorage to simulate login)
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
        // If user is logged in, hide the login link and show a logout option
        openLogin.style.display = 'none'; // Hide the login link

        // Create and add a logout link
        const logoutLink = document.createElement('li');
        logoutLink.innerHTML = '<a href="#" id="logoutLink">Logout</a>';
        nav.appendChild(logoutLink);

        // Handle logout action
        document.getElementById('logoutLink').addEventListener('click', function() {
            localStorage.removeItem('loggedIn'); // Remove the loggedIn flag
            window.location.reload(); // Reload the page to show the login link again
        });
    } else {
        // If user is not logged in, ensure the login link is visible
        openLogin.style.display = 'block';

        // When the user clicks the login link, open the modal
        openLogin.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior
            loginModal.style.display = 'flex';  // Show modal
        });

        // When the user clicks on <span> (x), close the modal
        closeBtn.addEventListener('click', function() {
            loginModal.style.display = 'none';  // Hide modal
        });

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = 'none';  // Hide modal
            }
        });

        // Handle the login form submission (for demo purposes)
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent form submission
            localStorage.setItem('loggedIn', true); // Set loggedIn flag in localStorage
            alert('Login successful!');
            loginModal.style.display = 'none';  // Close the modal
            window.location.reload(); // Reload the page to update the login status
        });
    }
});
