// ==========================================
// QuizVerse - Global Dark Mode
// ==========================================

const darkMode =
    localStorage.getItem("darkMode") === "true";


if (darkMode) {

    document.body.classList.add("dark-mode");

}