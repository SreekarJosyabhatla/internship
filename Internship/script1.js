// Get all sidebar links
const sidebarLinks = document.querySelectorAll(".sidebar-link");

// Function to hide all content sections
function hideAllContent() {
  const contentSections = document.querySelectorAll(".content section");
  contentSections.forEach((section) => (section.style.display = "none"));
}

// Function to show the targeted content section
function showContent(target) {
  const contentSection = document.getElementById(target);
  contentSection.style.display = "block";
}

// Function to generate random mentees (replace with actual data fetching if needed)
function generateRandomMentees() {
  const mentees = [];
  const names = [
    "Alice Smith",
    "Bob Johnson",
    "Charlie Brown",
    "Diana Miller",
    "Emily Garcia",
  ];
  for (let i = 1; i <= 5; i++) {
    const mentee = {
      id: i,
      name: names[Math.floor(Math.random() * names.length)],
    };
    mentees.push(mentee);
  }
  return mentees;
}

// Function to populate mentor dropdown
function populateMentees() {
  const menteeSelect = document.getElementById("mentee-select");
  menteeSelect.innerHTML = ""; // Clear existing options

  const mentees = generateRandomMentees(); // Replace with actual data fetching if needed

  mentees.forEach((mentor) => {
    const option = document.createElement("option");
    option.value = mentor.id;
    option.text = mentor.name;
    menteeSelect.appendChild(option);
  });
}

// Function to validate and submit task form
function submitTaskForm(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get task description, due date, and selected mentee ID
  const taskDescription = document.getElementById("task-description").value;
  const dueDate = document.getElementById("due-date").value;
  const selectedMenteeId = document.getElementById("mentee-select").value;

  // Basic validation (replace with more robust validation)
  if (!taskDescription || !dueDate || !selectedMenteeId) {
    alert("Please enter all required fields.");
    return;
  }

  // Simulate task creation (replace with actual logic, including selectedMenteeId)
  console.log(
    `Task assigned to mentee ${selectedMenteeId}: ${taskDescription}, Due date: ${dueDate}`
  );

  // Display success message (replace with appropriate UI feedback)
  alert("Task assigned successfully!");

  // Clear the form after successful submission
  document.getElementById("assign-task-form").reset();
}

// **Calling populateMentees function:**

// Option 1: Call on page load (recommended)
populateMentees(); // Call directly in the script

// Option 2: Call based on an event (e.g., button click)
// const populateButton = document.getElementById("populate-button");
// populateButton.addEventListener("click", populateMentees); // Call on button click

// Add click event listener to each sidebar link
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the target content section ID from the data-target attribute
    const target = this.dataset.target;

    // Hide all content sections first
    hideAllContent();

    // Show the targeted content section
    showContent(target);
  });
});

// Add submit event listener to the assign task form
const assignTaskForm = document.getElementById("assign-task-form");
assignTaskForm.addEventListener("submit", submitTaskForm);
