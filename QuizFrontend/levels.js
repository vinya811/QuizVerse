// ==========================================
// QuizVerse - Levels Page
// ==========================================

// Get subject from URL
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

console.log("FULL URL:", window.location.href);
console.log("SUBJECT FROM URL:", subject);


// ==========================================
// ELEMENTS
// ==========================================

const subjectTitle = document.getElementById("subject-title");
const backButton = document.getElementById("back-btn");
const playButtons = document.querySelectorAll(".play-btn");


// ==========================================
// SUBJECT NAMES
// ==========================================

const subjects = {
    javascript: "JavaScript Basics",
    gk: "General Knowledge",
    science: "Science Quiz"
};


// ==========================================
// DISPLAY SUBJECT NAME
// ==========================================

subjectTitle.textContent =
    subjects[subject] || "QuizVerse";


// ==========================================
// BACK BUTTON
// ==========================================

backButton.addEventListener("click", function () {

    window.location.href = "index4.html";

});


// ==========================================
// START QUIZ BUTTONS
// ==========================================

playButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const level = this.dataset.level;

        console.log("Subject before saving:", subject);
        console.log("Selected level:", level);


        // Save selected subject and level
        localStorage.setItem("subject", subject);
        localStorage.setItem("level", level);


        console.log(
            "Saved subject:",
            localStorage.getItem("subject")
        );

        console.log(
            "Saved level:",
            localStorage.getItem("level")
        );


        // Go to instructions page
        window.location.href = "instructions.html";

    });

});


// ==========================================
// HOVER ANIMATION
// ==========================================

playButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        this.style.transform =
            "translateY(-3px) scale(1.02)";

    });


    button.addEventListener("mouseleave", function () {

        this.style.transform = "";

    });

});