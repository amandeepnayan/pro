// Login.js

document.getElementById('userLogin').addEventListener('click', function () {
    handleLogin('Customer');
});

document.getElementById('officerLogin').addEventListener('click', function () {
    handleLogin('Officer');
});

function handleLogin(role) {
    // Clear previous error messages
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validate username
    if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required.';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Validate password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{1,30}$/;
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be 1-30 characters long, with at least one uppercase, one lowercase, and one special character.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Save user details (role and username) to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        // Generate Customer ID if the user is a customer
        if (role === 'Customer' && !localStorage.getItem('customerId')) {
            const customerId = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
            localStorage.setItem('customerId', customerId);
        }

        // Redirect to the homepage
        window.location.href = "homepage.html"; 
    }
}

document.getElementById('registerButton').addEventListener('click', function() {
    // 1. Get values from registration form fields
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const mobile = document.getElementById('regMobile').value.trim();
    const address = document.getElementById('regAddress').value.trim();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const preferences = document.getElementById('regPreferences').value;

    // 2. Basic validation (you can add more robust validation)
    let isValid = true;
    if (!name || !email || !mobile || !address || !username || !password) {
        alert("All fields are required!");
        isValid = false;
    }

    // 3. If valid, save user data (consider using localStorage or sending to a server)
    if (isValid) {
        // Example using localStorage (replace with your actual storage logic)
        const user = {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            username: username,
            password: password,
            preferences: preferences
        };
        localStorage.setItem(username, JSON.stringify(user));

        // 4. Optionally, redirect to a success page or login page
        alert("Registration successful!");
        // window.location.href = "login.html"; 
    }
});