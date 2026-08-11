// ==============================
// GET QUIZ SETTINGS
// ==============================

const subject =
    localStorage.getItem("subject");

const level =
    localStorage.getItem("level") || "easy";

console.log("Subject:", subject);
console.log("Level:", level);


// ==============================
// SELECT QUESTIONS
// ==============================

const selectedQuestions =
    questions.filter(function (question) {

        return (
            question.subject === subject &&
            question.difficulty === level
        );

    });

console.log(
    "Selected Questions:",
    selectedQuestions
);


// ==============================
// CHECK QUESTIONS
// ==============================

if (selectedQuestions.length === 0) {

    alert(
        "No questions found for this subject and level."
    );

    window.location.href = "levels.html";

}


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


// ==============================
// CURRENT QUIZ
// ==============================

const currentQuiz =
    quizSettings[level] || quizSettings.easy;


// ==============================
// DISPLAY QUIZ DETAILS
// ==============================

document.getElementById("subject").textContent =
    currentQuiz.subject;

document.getElementById("difficulty").textContent =
    currentQuiz.difficulty;

document.getElementById("totalQuestions").textContent =
    selectedQuestions.length;

document.getElementById("timeLimit").textContent =
    currentQuiz.minutes + " Min";

document.getElementById("points").textContent =
    currentQuiz.points;


// ==============================
// TIMER
// ==============================

let timeLeft =
    currentQuiz.minutes * 60;

const timer =
    document.getElementById("timer");

let countdown;

let quizFinished = false;


function updateTimer() {

    if (quizFinished) {
        return;
    }

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timer.textContent =
        `${minutes}:${seconds
            .toString()
            .padStart(2, "0")}`;


    if (timeLeft <= 0) {

        clearInterval(countdown);

        quizFinished = true;

        submitQuiz(true);

        return;
    }

    timeLeft--;

}


updateTimer();

countdown =
    setInterval(updateTimer, 1000);


// ==============================
// QUIZ VARIABLES
// ==============================

let currentQuestion = 0;

let selectedAnswers = [];


// ==============================
// ELEMENTS
// ==============================

const questionNumber =
    document.getElementById(
        "questionNumber"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const options =
    document.getElementById(
        "options"
    );

const previousBtn =
    document.getElementById(
        "previousBtn"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );

const progressFill =
    document.getElementById(
        "progressFill"
    );

const progressText =
    document.getElementById(
        "progressText"
    );


// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    const q =
        selectedQuestions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1}`;


    questionText.textContent =
        q.question;


    options.innerHTML = "";


    q.options.forEach(
        function (option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.classList.add(
                "option"
            );


            button.textContent =
                option;


            if (
                selectedAnswers[
                    currentQuestion
                ] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                function () {

                    selectedAnswers[
                        currentQuestion
                    ] = index;

                    loadQuestion();

                }
            );


            options.appendChild(button);

        }
    );


    // ==========================
    // PROGRESS
    // ==========================

    const progress =
        (
            (currentQuestion + 1) /
            selectedQuestions.length
        ) * 100;


    progressFill.style.width =
        progress + "%";


    progressText.textContent =
        `${currentQuestion + 1} / ${
            selectedQuestions.length
        }`;


    // ==========================
    // PREVIOUS BUTTON
    // ==========================

    previousBtn.disabled =
        currentQuestion === 0;


    // ==========================
    // NEXT BUTTON
    // ==========================

    if (
        currentQuestion ===
        selectedQuestions.length - 1
    ) {

        nextBtn.textContent =
            "Submit Quiz";

    }

    else {

        nextBtn.textContent =
            "Next →";

    }

}


// ==============================
// NEXT / SUBMIT
// ==============================

nextBtn.addEventListener(
    "click",
    function () {

        if (
            selectedAnswers[
                currentQuestion
            ] === undefined
        ) {

            alert(
                "Please select an option first!"
            );

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

            submitQuiz(false);

        }

    }
);


// ==============================
// PREVIOUS
// ==============================

previousBtn.addEventListener(
    "click",
    function () {

        if (currentQuestion > 0) {

            currentQuestion--;

            loadQuestion();

        }

    }
);


// ==============================
// CALCULATE SCORE
// ==============================

function calculateScore() {

    let score = 0;

    let correct = 0;

    let wrong = 0;


    selectedQuestions.forEach(
        function (question, index) {

            if (
                selectedAnswers[index] ===
                question.options.indexOf(
                    question.correctAnswer
                )
            ) {

                correct++;

                score +=
                    level === "easy"
                        ? 5
                        : level === "medium"
                        ? 10
                        : 15;

            }

            else {

                wrong++;

            }

        }
    );


    return {
        score,
        correct,
        wrong
    };

}


// ==============================
// SUBMIT QUIZ
// ==============================

function submitQuiz(timeUp) {

    if (quizFinished && !timeUp) {
        return;
    }

    quizFinished = true;

    clearInterval(countdown);


    const result =
        calculateScore();


    localStorage.setItem(
        "quizScore",
        result.score
    );

    localStorage.setItem(
        "quizCorrect",
        result.correct
    );

    localStorage.setItem(
        "quizWrong",
        result.wrong
    );

    localStorage.setItem(
        "quizTotal",
        selectedQuestions.length
    );


    if (timeUp) {

        alert(
            `⏰ Time is up!\n\n` +
            `Score: ${result.score}\n` +
            `Correct: ${result.correct}\n` +
            `Wrong: ${result.wrong}`
        );

    }

    else {

        alert(
            `🎉 Quiz Submitted!\n\n` +
            `Score: ${result.score}\n` +
            `Correct: ${result.correct}\n` +
            `Wrong: ${result.wrong}`
        );

    }


    // For now return to levels page
    window.location.href =
        "levels.html";

}


// ==============================
// START QUIZ
// ==============================

loadQuestion();