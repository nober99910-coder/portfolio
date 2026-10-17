// 1. Display the current year
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// 2. Switch between light mode and dark mode
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});


// 3. Display details for the selected sample project
const projectButtons = document.querySelectorAll(".project-button");
const projectMessage = document.getElementById("projectMessage");

const projectDetails = {
    "Personal Profile":
        "Personal Profile: I used HTML and CSS to introduce myself.",

    "Calculator":
        "Calculator: I plan to use JavaScript for addition and subtraction.",

    "To-Do List":
        "To-Do List: I plan to create a list where users can add tasks."
};

projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const projectName = button.dataset.project;

        projectMessage.textContent = projectDetails[projectName];
    });
});


// 4. Handle the practice contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const message = document.getElementById("visitorMessage").value.trim();

    if (name === "" || message === "") {
        formMessage.textContent = "Please enter your name and message.";
        return;
    }

    // textContent displays user input safely as plain text
    formMessage.textContent =
        "Thank you, " + name +
        "! Your practice message was received on this page. No email was sent.";

    contactForm.reset();
});