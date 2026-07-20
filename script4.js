const profile = document.getElementById("profile");

const profileMenu = document.getElementById("profile-menu");

const settingsButton = document.getElementById("settings-btn");

const logoutButton = document.getElementById("logout-btn");

// OPEN PROFILE MENU

profile.addEventListener("click", function () {

    profileMenu.classList.toggle("show");

});


// SETTINGS

settingsButton.addEventListener("click", function (event) {

    event.stopPropagation();

    window.location.href = "settings.html";

});


// LOGOUT

logoutButton.addEventListener("click", function (event) {

    event.stopPropagation();

    localStorage.removeItem("username");

    window.location.href = "index2.html";

});

const username = document.getElementById("username");

const quizCount = document.getElementById("quiz-count");

const quizList = document.getElementById("quiz-list");

// APPLY DARK MODE

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");

}

// GET USER

const savedUsername = localStorage.getItem("username");

if (savedUsername !== null) {

    username.textContent = savedUsername;

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