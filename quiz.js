let currentQuestion = 0;
let selectedAnswers = [];

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const progressFill = document.getElementById("progressFill");


function loadQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1}`;

    questionText.textContent = q.question;

    options.innerHTML = "";

    q.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.classList.add("option");

        button.textContent = option;

        if (selectedAnswers[currentQuestion] === index) {

            button.classList.add("selected");

        }

        button.addEventListener("click", function() {

            selectedAnswers[currentQuestion] = index;

            loadQuestion();

        });

        options.appendChild(button);

    });

    

    progressFill.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    previousBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent = "Submit Quiz";

    } else {

        nextBtn.textContent = "Next →";

    }

}

nextBtn.addEventListener("click", function() {

    if (selectedAnswers[currentQuestion] === undefined) {

        alert("Please select an option first!");

        return;

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        alert("Quiz Submitted!");

    }

});

previousBtn.addEventListener("click", function() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});

loadQuestion();