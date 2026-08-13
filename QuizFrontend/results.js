// ==========================================
// QuizVerse - Results Page
// ==========================================


// GET QUIZ INFORMATION
const subject =
    localStorage.getItem("subject");

const level =
    localStorage.getItem("level");


// GET SELECTED ANSWERS
const savedAnswers =
    JSON.parse(
        localStorage.getItem("quizAnswers")
    ) || [];


// FILTER QUESTIONS
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
    Math.round((correct / total) * 100);


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


// Run review
reviewAnswers();


// ==========================================
// RESTART QUIZ
// ==========================================

const restartButton =
    document.getElementById("restart-btn");


restartButton.addEventListener(
    "click",
    function() {

        // Remove previous answers

        localStorage.removeItem(
            "quizAnswers"
        );


        // Start quiz again

        window.location.href =
            "quiz.html";

    }
);