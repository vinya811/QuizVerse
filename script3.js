const backButton = document.getElementById("back-btn");

const registerButton = document.getElementById("register-btn");

const email = document.getElementById("email");

const username = document.getElementById("username");

const password = document.getElementById("password");

const phone = document.getElementById("phone");

const dob = document.getElementById("dob");

const errorMessage = document.getElementById("error-message");


// BACK BUTTON

backButton.addEventListener("click", function () {

    window.location.href = "index2.html";

});


// REGISTER BUTTON

registerButton.addEventListener("click", function () {


    if (email.value.trim() === "") {

        errorMessage.textContent =
            "⚠️ Please enter your email";

        return;

    }


    if (username.value.trim() === "") {

        errorMessage.textContent =
            "⚠️ Please enter your username";

        return;

    }


    if (password.value.trim() === "") {

        errorMessage.textContent =
            "⚠️ Please enter your password";

        return;

    }


    if (phone.value.trim() === "") {

        errorMessage.textContent =
            "⚠️ Please enter your phone number";

        return;

    }


    if (dob.value === "") {

        errorMessage.textContent =
            "⚠️ Please enter your date of birth";

        return;

    }


    // USER OBJECT

    const user = {

        email: email.value,

        username: username.value,

        password: password.value,

        phone: phone.value,

        dob: dob.value

    };


    // SAVE USER

    localStorage.setItem(

        "quizVerseUser",

        JSON.stringify(user)

    );


    errorMessage.style.color = "green";

    errorMessage.textContent =

        "✅ Registration successful!";


    setTimeout(function () {

        window.location.href = "index2.html";

    }, 1000);


});