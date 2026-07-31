// ==========================================
// QuizVerse - Levels Page
// ==========================================

// Get subject from URL
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

// Elements
const subjectTitle = document.getElementById("subject-title");
const backButton = document.getElementById("back-btn");
const playButtons = document.querySelectorAll(".play-btn");

// Subject Names
const subjects = {
    javascript: "JavaScript Basics",
    gk: "General Knowledge",
    science: "Science Quiz"
};

// Display Subject Name
subjectTitle.textContent = subjects[subject] || "QuizVerse";

// Back Button
backButton.addEventListener("click", function () {
    window.location.href = "index4.html";
});

// Start Quiz Buttons
playButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const level = this.dataset.level;

        // Save selected quiz
        localStorage.setItem("subject", subject);
        localStorage.setItem("difficulty", level);

        // Go to Instructions Page
        window.location.href = "instructions.html";

    });

});

// Small hover animation
playButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-3px) scale(1.02)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "";

    });

});