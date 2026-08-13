// ==============================
// GET ELEMENTS
// ==============================

const signupLink = document.getElementById("signup-link");

const loginButton = document.getElementById("login-btn");

const loginEmail = document.getElementById("login-email");

const loginPassword = document.getElementById("login-password");

const loginError = document.getElementById("login-error");


// ==============================
// GO TO SIGN UP
// ==============================

signupLink.addEventListener("click", function () {

    window.location.href = "index3.html";

});


// ==============================
// LOGIN
// ==============================

loginButton.addEventListener("click", async function () {

    const email = loginEmail.value.trim();

    const password = loginPassword.value.trim();


    // Clear previous message

    loginError.textContent = "";
    loginError.style.color = "red";


    // ==========================
    // VALIDATION
    // ==========================

    if (email === "") {

        loginError.textContent =
            "⚠️ Please enter your email";

        return;

    }


    if (password === "") {

        loginError.textContent =
            "⚠️ Please enter your password";

        return;

    }


    // ==========================
    // SEND LOGIN REQUEST
    // ==========================

    try {

        loginButton.disabled = true;

        loginButton.textContent = "Logging in...";


        const response = await fetch(
            "https://quizverse-backend-si7g.onrender.com/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );


        const data = await response.json();


        // ==========================
        // LOGIN FAILED
        // ==========================

        if (!response.ok) {

            loginError.style.color = "red";

            loginError.textContent =
                "❌ " + (data.message || "Login failed");

            loginButton.disabled = false;

            loginButton.textContent = "Login";

            return;

        }


        // ==========================
        // LOGIN SUCCESSFUL
        // ==========================

        localStorage.setItem(
            "username",
            data.username
        );

        localStorage.setItem(
            "email",
            data.email
        );


        loginError.style.color = "green";

        loginError.textContent =
            "✅ Login successful!";


        // Go to home page

        setTimeout(function () {

            window.location.href = "index4.html";

        }, 800);


    } catch (error) {

        console.error("LOGIN ERROR:", error);

        loginError.style.color = "red";

        loginError.textContent =
            "❌ Cannot connect to server. Make sure the backend is running.";


        loginButton.disabled = false;

        loginButton.textContent = "Login";

    }

});