const homeLink = document.getElementById("home-link");
const mentorLink = document.getElementById("mentor-link");
const profileLink = document.getElementById("profile-link");
const academicsLink = document.getElementById("academics-link");
const jobsLink = document.getElementById("jobs-link");
const tasksLink = document.getElementById("tasks-link");
const resumeLink = document.getElementById("resume-link");
const offersLink = document.getElementById("offers-link");

const homeContent = document.getElementById("home-content");
const mentorContent = document.getElementById("mentor-content");
const profileContent = document.getElementById("profile-content");
const academicsContent = document.getElementById("academics-content");
const jobsContent = document.getElementById("jobs-content");
const tasksContent = document.getElementById("tasks-content");
const resumeContent = document.getElementById("resume-content");
const offersContent = document.getElementById("offers-content");

function showContent(contentId) {
  const contentSections = document.querySelectorAll(
    ".content-container section"
  );
  contentSections.forEach((section) => (section.style.display = "none")); // Hide all sections

  const contentToShow = document.getElementById(contentId);
  if (contentToShow) {
    contentToShow.style.display = "block";
  } else {
    console.error("Content with ID", contentId, "not found");
  }
}

homeLink.addEventListener("click", () => showContent("home-content"));
mentorLink.addEventListener("click", () => showContent("mentor-content"));
profileLink.addEventListener("click", () => showContent("profile-content"));
academicsLink.addEventListener("click", () => showContent("academics-content"));
jobsLink.addEventListener("click", () => showContent("jobs-content"));
tasksLink.addEventListener("click", () => showContent("tasks-content"));
resumeLink.addEventListener("click", () => showContent("resume-content"));
offersLink.addEventListener("click", () => showContent("offers-content"));

// Initially show the home content
showContent("home-content");
