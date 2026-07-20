const signupLink = document.getElementById("signup-link");

const loginButton = document.getElementById("login-btn");

const loginEmail = document.getElementById("login-email");

const loginPassword = document.getElementById("login-password");

const loginError = document.getElementById("login-error");


// GO TO SIGN UP

signupLink.addEventListener("click", function () {

    window.location.href = "index3.html";

});


// LOGIN BUTTON

loginButton.addEventListener("click", function () {


    if (loginEmail.value.trim() === "") {

        loginError.textContent =
            "⚠️ Please enter your email";

        return;

    }


    if (loginPassword.value.trim() === "") {

        loginError.textContent =
            "⚠️ Please enter your password";

        return;

    }


    // GET SAVED USER

    const savedUser = localStorage.getItem("quizVerseUser");


    if (savedUser === null) {

        loginError.textContent =
            "⚠️ No account found. Please sign up first.";

        return;

    }


    const user = JSON.parse(savedUser);


    // CHECK LOGIN

    if (

        loginEmail.value === user.email &&

        loginPassword.value === user.password

    ) {


        loginError.style.color = "green";

        loginError.textContent =
            "✅ Login successful!";


        setTimeout(function () {

            window.location.href = "index4.html";

        }, 1000);


    } else {


        loginError.style.color = "red";

        loginError.textContent =
            "❌ Incorrect email or password";


    }

});