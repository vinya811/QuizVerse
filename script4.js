const username = document.getElementById("username");

const quizCount = document.getElementById("quiz-count");

const quizList = document.getElementById("quiz-list");


// GET USER

const savedUser = localStorage.getItem("quizVerseUser");


if (savedUser !== null) {

    const user = JSON.parse(savedUser);

    username.textContent = user.username;

}


// QUIZ DATA

const quizzes = [

    {

        title: "JavaScript Basics",

        description: "Test your JavaScript knowledge",

        rating: "⭐ 4.5"

    },


    {

        title: "General Knowledge",

        description: "Challenge your general knowledge",

        rating: "⭐ 4.2"

    },


    {

        title: "Science Quiz",

        description: "Explore the world of science",

        rating: "⭐ 4.7"

    }

];


quizCount.textContent =

    `${quizzes.length} Quizzes`;


// DISPLAY QUIZZES

quizzes.forEach(function (quiz) {


    const quizCard = document.createElement("div");

    quizCard.classList.add("quiz-card");


    quizCard.innerHTML = `

        <h3>${quiz.title}</h3>

        <p>${quiz.description}</p>

        <p>${quiz.rating}</p>

        <button>

            Start Quiz

        </button>

    `;


    quizList.appendChild(quizCard);

});