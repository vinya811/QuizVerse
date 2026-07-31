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

registerButton.addEventListener("click", async function () {


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


    try {


        const response = await fetch(

            "http://localhost:5000/api/auth/register",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    email: email.value,

                    username: username.value,

                    password: password.value,

                    phone: phone.value,

                    dob: dob.value

                })

            }

        );


        const data = await response.json();


        if (!response.ok) {

            errorMessage.textContent =
                "❌ " + data.message;

            return;

        }


        errorMessage.style.color = "green";

        errorMessage.textContent =
            "✅ Registration successful!";


        setTimeout(function () {

            window.location.href = "index2.html";

        }, 1000);


    } catch (error) {


        errorMessage.style.color = "red";

        errorMessage.textContent =

            "❌ Cannot connect to server";


        console.log(error);


    }

});