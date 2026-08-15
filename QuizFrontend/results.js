// ==========================================
// QuizVerse - Results Page
// ==========================================


// ==========================================
// GET QUIZ INFORMATION
// ==========================================

const subject =
    localStorage.getItem("subject");

const level =
    localStorage.getItem("level");


// ==========================================
// GET SELECTED ANSWERS
// ==========================================

const savedAnswers =
    JSON.parse(
        localStorage.getItem("quizAnswers")
    ) || [];


// ==========================================
// FILTER QUESTIONS
// ==========================================

const selectedQuestions =
    questions.filter(function(question) {

        return question.subject === subject &&
               question.difficulty === level;

    });


// ==========================================
// CALCULATE SCORE
// ==========================================

let correct = 0;

selectedQuestions.forEach(function(question, index) {

    const selectedIndex =
        savedAnswers[index];

    if (
        selectedIndex !== undefined &&
        question.options[selectedIndex] ===
        question.correctAnswer
    ) {

        correct++;

    }

});


const total =
    selectedQuestions.length;

const wrong =
    total - correct;

const percentage =
    total > 0
        ? Math.round((correct / total) * 100)
        : 0;


// ==========================================
// UPDATE LEADERBOARD
// ==========================================

async function updateLeaderboard() {

    const email =
        localStorage.getItem("email");

    const currentLevel =
        localStorage.getItem("level");


    // Check login

    if (!email) {

        console.log(
            "No logged-in user found."
        );

        return;

    }


    // ==========================================
    // PREVENT DUPLICATE SCORE SUBMISSION
    // ==========================================

    const scoreSubmitted =
        sessionStorage.getItem(
            "quizScoreSubmitted"
        );

    if (scoreSubmitted === "true") {

        console.log(
            "🏆 Score already submitted for this quiz."
        );

        return;

    }


    try {

        const response = await fetch(
            "https://quizverse-backend-si7g.onrender.com/api/user/leaderboard/update",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: email,

                    correct: correct,

                    level: currentLevel

                })

            }
        );


        const data =
            await response.json();


        // ==========================================
        // BACKEND ERROR
        // ==========================================

        if (!response.ok) {

            console.log(
                "Leaderboard update failed:",
                data.message
            );

            return;

        }


        // ==========================================
        // SUCCESS
        // ==========================================

        console.log(
            "🏆 Leaderboard updated:",
            data
        );


        // Prevent submitting same quiz again

        sessionStorage.setItem(
            "quizScoreSubmitted",
            "true"
        );

    }

    catch (error) {

        console.log(
            "Leaderboard connection error:",
            error
        );

    }

}


// ==========================================
// UPDATE LEADERBOARD
// ==========================================

updateLeaderboard();


// ==========================================
// DISPLAY RESULT
// ==========================================

document.getElementById("score")
    .textContent =
    `${correct}/${total}`;


document.getElementById("percentage")
    .textContent =
    `${percentage}%`;


document.getElementById("correct-count")
    .textContent =
    correct;


document.getElementById("wrong-count")
    .textContent =
    wrong;


document.getElementById("total-count")
    .textContent =
    total;


// ==========================================
// REVIEW ANSWERS
// ==========================================

function reviewAnswers() {

    const reviewContainer =
        document.getElementById(
            "review-container"
        );


    reviewContainer.innerHTML = "";


    selectedQuestions.forEach(
        function(question, index) {

            const selectedIndex =
                savedAnswers[index];


            const selectedAnswer =
                selectedIndex !== undefined
                    ? question.options[selectedIndex]
                    : "Not answered";


            const isCorrect =
                selectedAnswer ===
                question.correctAnswer;


            const reviewCard =
                document.createElement("div");


            reviewCard.classList.add(
                "review-card"
            );


            if (isCorrect) {

                reviewCard.innerHTML = `

                    <h3>
                        Question ${index + 1}
                    </h3>

                    <p>
                        <strong>
                            ${question.question}
                        </strong>
                    </p>

                    <p class="correct">
                        ✓ Your Answer:
                        ${selectedAnswer}
                    </p>

                    <p class="correct-answer">
                        Correct Answer:
                        ${question.correctAnswer}
                    </p>

                `;

            }

            else {

                reviewCard.innerHTML = `

                    <h3>
                        Question ${index + 1}
                    </h3>

                    <p>
                        <strong>
                            ${question.question}
                        </strong>
                    </p>

                    <p class="wrong">
                        ✗ Your Answer:
                        ${selectedAnswer}
                    </p>

                    <p class="correct-answer">
                        ✓ Correct Answer:
                        ${question.correctAnswer}
                    </p>

                `;

            }


            reviewContainer.appendChild(
                reviewCard
            );

        }
    );

}


// ==========================================
// RUN REVIEW
// ==========================================

reviewAnswers();


// ==========================================
// RESTART QUIZ
// ==========================================

const restartButton =
    document.getElementById("restart-btn");


if (restartButton) {

    restartButton.addEventListener(
        "click",
        function() {

            // Remove previous answers

            localStorage.removeItem(
                "quizAnswers"
            );


            // Allow next quiz to submit
            // a new leaderboard score

            sessionStorage.removeItem(
                "quizScoreSubmitted"
            );


            // Start quiz again

            window.location.href =
                "quiz.html";

        }
    );

}


// ==========================================
// LEADERBOARD BUTTON
// ==========================================

const leaderboardButton =
    document.getElementById(
        "leaderboard-btn"
    );


if (leaderboardButton) {

    leaderboardButton.addEventListener(
        "click",
        function() {

            window.location.href =
                "leaderboard.html";

        }
    );
    // ==========================================
// BACK TO DASHBOARD BUTTON
// ==========================================

const dashboardButton =
    document.getElementById("dashboard-btn");

dashboardButton.addEventListener(
    "click",
    function() {

        window.location.href =
            "index4.html";

    }
);

}