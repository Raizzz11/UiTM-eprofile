// Validate login and store user session
function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple authentication (replace with database check)
    const users = {
        "student": "12345",
        "admin": "admin123"
    };

    if (users[username] && users[username] === password) {
        sessionStorage.setItem("loggedInUser", username); // Store user session
        window.location.href = "profilemenu.html"; // Redirect to profile menu
        return false;
    } else {
        alert("Invalid username or password!");
        return false;
    }
}

// Check if user is logged in (restrict profile page access)
if (window.location.pathname.includes("profilemenu.html")) {
    if (!sessionStorage.getItem("loggedInUser")) {
        alert("You must log in first!");
        window.location.href = "index.html"; // Redirect to login page
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    alert("You have logged out!");
    window.location.href = "index.html";
}
