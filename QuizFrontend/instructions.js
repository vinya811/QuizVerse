// ==========================================
// QuizVerse - Instructions Page
// ==========================================

// Get saved subject and level
const subject = localStorage.getItem("subject");
const level = localStorage.getItem("level");


// ==========================================
// ELEMENTS
// ==========================================

const subjectName = document.getElementById("subject-name");
const levelName = document.getElementById("level-name");

const questionsText = document.getElementById("questions");
const timeText = document.getElementById("time");
const pointsText = document.getElementById("points");

const backButton = document.getElementById("back-btn");
const backLevelButton = document.getElementById("back-level");
const startButton = document.getElementById("start-btn");


// ==========================================
// SUBJECT
// ==========================================

const subjects = {
    javascript: "JavaScript Basics",
    gk: "General Knowledge",
    science: "Science Quiz"
};

subjectName.textContent =
    subjects[subject] || "QuizVerse";


// ==========================================
// LEVEL SETTINGS
// ==========================================

const levelSettings = {

    easy: {
        name: "Easy Level",
        questions: 10,
        time: "5 Minutes",
        points: "+5"
    },

    medium: {
        name: "Medium Level",
        questions: 10,
        time: "10 Minutes",
        points: "+10"
    },

    hard: {
        name: "Hard Level",
        questions: 10,
        time: "15 Minutes",
        points: "+15"
    }

};


// Get current level
const currentLevel =
    levelSettings[level] || levelSettings.easy;


// ==========================================
// DISPLAY LEVEL INFORMATION
// ==========================================

levelName.textContent =
    currentLevel.name;

questionsText.textContent =
    currentLevel.questions;

timeText.textContent =
    currentLevel.time;

pointsText.textContent =
    currentLevel.points;


// ==========================================
// BACK TO LEVELS
// ==========================================

backButton.addEventListener("click", function () {

    window.history.back();

});


backLevelButton.addEventListener("click", function () {

    window.history.back();

});


// ==========================================
// START QUIZ
// ==========================================

startButton.addEventListener("click", function () {

    window.location.href = "quiz.html";

});