// Get the login form element
const loginForm = document.getElementById("login-form");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace these with your actual authentication logic
  // (e.g., database check, API call)
  if (username === "admin" && password === "admin123") {
    // Redirect to admin page (replace with actual URL)
    window.location.href = "mentor.html";
  } else if (username === "user" && password === "user456") {
    // Redirect to user page (replace with actual URL)
    window.location.href = "student.html";
  } else {
    // Display an error message
    alert("Invalid username or password.");
  }
});
