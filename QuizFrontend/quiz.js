// ==============================
// LEVEL SETTINGS
// ==============================

const subject = localStorage.getItem("subject");
const level = localStorage.getItem("level") || "easy";

console.log("Subject:", subject);
console.log("Level:", level);


// ==============================
// DARK MODE
// ==============================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
}


// Toggle dark mode
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        if (isDark) {

            localStorage.setItem("theme", "dark");
            this.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            this.textContent = "🌙";

        }

    });

}


// ==============================
// SELECT QUESTIONS
// ==============================

const selectedQuestions = questions.filter(function(question) {

    return question.subject === subject &&
           question.difficulty === level;

});


if (selectedQuestions.length === 0) {

    document.getElementById("questionText").textContent =
        "⚠️ No questions found. Please go back and select a subject/level again.";

    document
        .querySelectorAll(".buttons button")
        .forEach(btn => btn.disabled = true);

    throw new Error(
        "No questions loaded — subject/level missing from localStorage."
    );

}


console.log("Selected Questions:", selectedQuestions);


// ==============================
// QUIZ SETTINGS
// ==============================

const quizSettings = {

    easy: {
        subject: "Easy Quiz",
        difficulty: "Easy Level",
        questions: 10,
        minutes: 5,
        points: "+5"
    },

    medium: {
        subject: "Medium Quiz",
        difficulty: "Medium Level",
        questions: 10,
        minutes: 10,
        points: "+10"
    },

    hard: {
        subject: "Hard Quiz",
        difficulty: "Hard Level",
        questions: 10,
        minutes: 15,
        points: "+15"
    }

};


const currentQuiz = quizSettings[level];


// ==============================
// DISPLAY QUIZ DETAILS
// ==============================

document.getElementById("subject").textContent =
    currentQuiz.subject;

document.getElementById("difficulty").textContent =
    currentQuiz.difficulty;

document.getElementById("totalQuestions").textContent =
    currentQuiz.questions;

document.getElementById("timeLimit").textContent =
    currentQuiz.minutes + " Min";

document.getElementById("points").textContent =
    currentQuiz.points;


// ==============================
// TIMER
// ==============================

let timeLeft = currentQuiz.minutes * 60;

const timer = document.getElementById("timer");


function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;


    if (timeLeft <= 0) {

        clearInterval(countdown);

        alert("⏰ Time is up!");

        return;

    }

    timeLeft--;

}


updateTimer();

const countdown = setInterval(updateTimer, 1000);


// ==============================
// QUIZ LOGIC
// ==============================

let currentQuestion = 0;

let selectedAnswers = [];


// ==============================
// CALCULATE SCORE
// ==============================

function calculateScore() {

    let correct = 0;

    selectedQuestions.forEach(function(question, index) {

        const selectedIndex = selectedAnswers[index];

        if (
            selectedIndex !== undefined &&
            question.options[selectedIndex] === question.correctAnswer
        ) {

            correct++;

        }

    });

    return correct;

}


// ==============================
// ELEMENTS
// ==============================

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const options =
    document.getElementById("options");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");


// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    const q = selectedQuestions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1}`;


    questionText.textContent =
        q.question;


    options.innerHTML = "";


    q.options.forEach(function(option, index) {

        const button =
            document.createElement("button");


        button.classList.add("option");


        button.textContent =
            option;


        if (
            selectedAnswers[currentQuestion] === index
        ) {

            button.classList.add("selected");

        }


        button.addEventListener("click", function() {

            selectedAnswers[currentQuestion] =
                index;

            loadQuestion();

        });


        options.appendChild(button);

    });


    // Progress bar

    progressFill.style.width =
        ((currentQuestion + 1) /
        selectedQuestions.length) * 100 + "%";


    progressText.textContent =
        `${currentQuestion + 1} / ${selectedQuestions.length}`;


    // Previous button

    previousBtn.disabled =
        currentQuestion === 0;


    // Next button

    if (
        currentQuestion ===
        selectedQuestions.length - 1
    ) {

        nextBtn.textContent =
            "Submit Quiz";

    } else {

        nextBtn.textContent =
            "Next →";

    }

}


// ==============================
// NEXT / SUBMIT BUTTON
// ==============================

nextBtn.addEventListener("click", function() {

    if (
        selectedAnswers[currentQuestion] === undefined
    ) {

        alert("Please select an option first!");

        return;

    }


    if (
        currentQuestion <
        selectedQuestions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

    else {

        clearInterval(countdown);


        // Save user's selected answers

        localStorage.setItem(
            "quizAnswers",
            JSON.stringify(selectedAnswers)
        );


        // Open results page

        window.location.href =
            "results.html";

    }

});


// ==============================
// PREVIOUS BUTTON
// ==============================

previousBtn.addEventListener("click", function() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});


// ==============================
// INITIAL LOAD
// ==============================

loadQuestion();