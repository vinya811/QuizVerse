const subject = localStorage.getItem("subject");

const level = localStorage.getItem("difficulty");

// Subject

const subjectName = document.getElementById("subject-name");

if(subject==="javascript")
subjectName.textContent="JavaScript Basics";

else if(subject==="gk")
subjectName.textContent="General Knowledge";

else
subjectName.textContent="Science Quiz";

// Level

document.getElementById("level-name").textContent =
level.charAt(0).toUpperCase()+level.slice(1)+" Level";

// Difficulty Settings

const questions=document.getElementById("questions");

const time=document.getElementById("time");

const points=document.getElementById("points");

if(level==="easy"){

questions.textContent="20";

time.textContent="15 Minutes";

points.textContent="+5";

}

else if(level==="medium"){

questions.textContent="20";

time.textContent="20 Minutes";

points.textContent="+10";

}

else{

questions.textContent="20";

time.textContent="25 Minutes";

points.textContent="+15";

}

// Back

document.getElementById("back-btn").addEventListener("click",function(){

window.history.back();

});

document.getElementById("back-level").addEventListener("click",function(){

window.history.back();

});

// Start Quiz

document.getElementById("start-btn").addEventListener("click",function(){

window.location.href="quiz.html";

});