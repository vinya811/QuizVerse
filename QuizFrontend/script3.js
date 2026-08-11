const backButton = document.getElementById("back-btn");
const registerButton = document.getElementById("register-btn");

const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");

const errorMessage = document.getElementById("error-message");

// ==============================
// BACK BUTTON
// ==============================

backButton.addEventListener("click", function () {
    window.location.href = "index2.html";
});


// ==============================
// REGISTER BUTTON
// ==============================

registerButton.addEventListener("click", async function () {

    // Clear previous message
    errorMessage.textContent = "";
    errorMessage.style.color = "red";

    // ==========================
    // VALIDATION
    // ==========================

    if (email.value.trim() === "") {
        errorMessage.textContent = "⚠️ Please enter your email";
        return;
    }

    if (!email.value.includes("@")) {
        errorMessage.textContent = "⚠️ Please enter a valid email";
        return;
    }

    if (username.value.trim() === "") {
        errorMessage.textContent = "⚠️ Please enter your username";
        return;
    }

    if (password.value.trim() === "") {
        errorMessage.textContent = "⚠️ Please enter your password";
        return;
    }

    if (password.value.length < 6) {
        errorMessage.textContent =
            "⚠️ Password must be at least 6 characters";
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


    // ==========================
    // SEND DATA TO BACKEND
    // ==========================

    try {

        registerButton.disabled = true;
        registerButton.textContent = "Registering...";

        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email.value.trim(),
                    username: username.value.trim(),
                    password: password.value,
                    phone: phone.value.trim(),
                    dob: dob.value
                })
            }
        );

        const data = await response.json();


        // ==========================
        // BACKEND ERROR
        // ==========================

        if (!response.ok) {

            errorMessage.style.color = "red";

            errorMessage.textContent =
                "❌ " + (data.message || "Registration failed");

            registerButton.disabled = false;
            registerButton.textContent = "Register";

            return;
        }


        // ==========================
        // SUCCESS
        // ==========================

        errorMessage.style.color = "green";

        errorMessage.textContent =
            "✅ Registration successful!";

        // Save basic user information
        localStorage.setItem("email", email.value.trim());
        localStorage.setItem("username", username.value.trim());


        // Go to login page
        setTimeout(function () {
            window.location.href = "index2.html";
        }, 1000);


    } catch (error) {

        console.error("REGISTRATION ERROR:", error);

        errorMessage.style.color = "red";

        errorMessage.textContent =
            "❌ Cannot connect to server. Make sure the backend is running.";

        registerButton.disabled = false;
        registerButton.textContent = "Register";
    }

});