const profile = document.getElementById("profile");

const profileMenu = document.getElementById("profile-menu");

const settingsButton = document.getElementById("settings-btn");

const logoutButton = document.getElementById("logout-btn");


// =========================
// OPEN PROFILE MENU
// =========================

profile.addEventListener("click", function () {

    profileMenu.classList.toggle("show");

});


// =========================
// SETTINGS
// =========================

settingsButton.addEventListener("click", function (event) {

    event.stopPropagation();

    window.location.href = "settings.html";

});


// =========================
// LOGOUT
// =========================

logoutButton.addEventListener("click", function (event) {

    event.stopPropagation();

    localStorage.removeItem("username");
    localStorage.removeItem("email");

    window.location.href = "index2.html";

});


const username =
    document.getElementById("username");

const quizCount =
    document.getElementById("quiz-count");

const quizList =
    document.getElementById("quiz-list");


// =========================
// APPLY DARK MODE
// =========================

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");

}


// =========================
// GET USER
// =========================

const savedUsername =
    localStorage.getItem("username");

if (savedUsername !== null) {

    username.textContent = savedUsername;

}


// =========================
// QUIZ DATA
// =========================

const quizzes = [

    {
        title: "JavaScript Basics",

        description:
            "Test your JavaScript knowledge",

        rating:
            "⭐ 4.5",

        subject:
            "javascript"
    },

    {
        title: "General Knowledge",

        description:
            "Challenge your general knowledge",

        rating:
            "⭐ 4.2",

        subject:
            "gk"
    }

];


// =========================
// QUIZ COUNT
// =========================

quizCount.textContent =
    `${quizzes.length} Quizzes`;


// =========================
// DISPLAY QUIZZES
// =========================

quizzes.forEach(function (quiz) {

    const quizCard =
        document.createElement("div");

    quizCard.classList.add(
        "quiz-card"
    );


    quizCard.innerHTML = `

        <h3>
            ${quiz.title}
        </h3>

        <p>
            ${quiz.description}
        </p>

        <p>
            ${quiz.rating}
        </p>

        <button class="start-btn">
            Choose Level
        </button>

    `;


    quizList.appendChild(
        quizCard
    );


    const button =
        quizCard.querySelector(
            ".start-btn"
        );


    button.addEventListener(
    "click",
    function () {

        window.location.href =
            `levels.html?subject=${quiz.subject}`;

    }
);

});


// =========================
// LEADERBOARD BUTTON
// =========================

const leaderboardButton =
    document.getElementById(
        "leaderboard-btn"
    );


leaderboardButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "leaderboard.html";

    }
);