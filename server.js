const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

const users = []; // In-memory array (acts as a temporary database)

// Enable CORS globally
app.use(cors());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (signup page, assets, and main page)
app.use(express.static(path.join(__dirname, 'signup-page'))); // For signup-page
app.use(express.static(path.join(__dirname, 'assets')));      // For assets folder
app.use('/main-page', express.static(path.join(__dirname, 'main-page'))); // For main-page folder

// Serve the home page (index.html) at the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the signup page when accessed via /signup-page
app.get('/signup-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup-page/signup.html'));
});

// Handle sign-up form submission
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.json({ success: false, message: 'User already exists!' });
    }

    // Add user to the users array (in memory)
    users.push({ name, email, password });
    res.json({ success: true, message: 'Signup successful!' });
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    const user = users.find(user => user.email === email);

    if (!user) {
        // User not found
        return res.json({ success: false, message: 'Email not found!' });
    }

    // Check if the password matches
    if (user.password !== password) {
        return res.json({ success: false, message: 'Incorrect password!' });
    }

    // Success: User authenticated
    return res.json({ success: true, message: 'Login successful!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// After successful login
setTimeout(function() {
    window.location.href = '/main-page/index.html'; // This should match your static route
}, 1500);
