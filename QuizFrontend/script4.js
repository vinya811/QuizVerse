// ==========================================
// QuizVerse - Home Page
// ==========================================

// ==========================================
// USERNAME
// ==========================================

const usernameElement =
    document.getElementById("username");

const savedUsername =
    localStorage.getItem("username");

if (savedUsername) {

    usernameElement.textContent =
        savedUsername;

}


// ==========================================
// PROFILE MENU
// ==========================================

const profile =
    document.getElementById("profile");

const profileMenu =
    document.getElementById("profile-menu");


profile.addEventListener("click", function (event) {

    event.stopPropagation();

    profileMenu.classList.toggle("show");

});


// Close profile menu when clicking elsewhere

document.addEventListener("click", function () {

    profileMenu.classList.remove("show");

});


// ==========================================
// SETTINGS
// ==========================================

const settingsButton =
    document.getElementById("settings-btn");


settingsButton.addEventListener("click", function (event) {

    event.stopPropagation();

    window.location.href = "settings.html";

});


// ==========================================
// LOGOUT
// ==========================================

const logoutButton =
    document.getElementById("logout-btn");


logoutButton.addEventListener("click", function (event) {

    event.stopPropagation();

    localStorage.removeItem("username");
    localStorage.removeItem("email");

    window.location.href = "index2.html";

});


// ==========================================
// START QUIZ
// ==========================================

function startQuiz(subject) {

    console.log("Selected subject:", subject);


    // Save subject
    localStorage.setItem(
        "subject",
        subject
    );


    // Open difficulty page
    window.location.href =
        "levels.html?subject=" + subject;

}


// ==========================================
// QUIZ COUNT
// ==========================================

const quizCount =
    document.getElementById("quiz-count");

const quizCards =
    document.querySelectorAll(".quiz-card");


quizCount.textContent =
    quizCards.length + " Quizzes";


// ==========================================
// DARK MODE
// ==========================================

if (
    localStorage.getItem("darkMode") === "true"
) {

    document.body.classList.add("dark-mode");

}