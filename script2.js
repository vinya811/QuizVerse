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

loginButton.addEventListener("click", async function () {

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


    try {

        const response = await fetch(

            "http://localhost:5000/api/login",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    email: loginEmail.value,

                    password: loginPassword.value

                })

            }

        );


        const data = await response.json();


        if (!response.ok) {

            loginError.style.color = "red";

            loginError.textContent =
                "❌ " + data.message;

            return;

        }


        // SAVE USERNAME

        localStorage.setItem("username", data.username);
        localStorage.setItem("email", loginEmail.value);


        loginError.style.color = "green";

        loginError.textContent =
            "✅ Login successful!";


        setTimeout(function () {

            window.location.href = "index4.html";

        }, 1000);


    } catch (error) {

        loginError.style.color = "red";

        loginError.textContent =

            "❌ Cannot connect to server";


        console.log(error);

    }

});