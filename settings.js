const usernameInput =
    document.getElementById("username-input");

const phoneInput =
    document.getElementById("phone-input");

const backButton =
    document.getElementById("back-btn");

const saveButton =
    document.getElementById("save-btn");

const message =
    document.getElementById("message");

const themeButton =
    document.getElementById("theme-btn");


const email =
    localStorage.getItem("email");


// LOAD USER PROFILE

async function loadUserProfile() {

    try {

        const response = await fetch(

            `http://localhost:5000/api/user/${email}`

        );


        const data = await response.json();


        if (!response.ok) {

            message.textContent =
                "❌ " + data.message;

            return;

        }


        usernameInput.value =
            data.username;

        phoneInput.value =
            data.phone;


        localStorage.setItem(

            "username",

            data.username

        );


    } catch (error) {

        console.log(error);

        message.textContent =
            "❌ Cannot load profile";

    }

}


loadUserProfile();


// DARK MODE

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");

    themeButton.textContent =
        "☀️ Light Mode";

}


// DARK MODE BUTTON

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const darkMode =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(

        "darkMode",

        darkMode

    );


    themeButton.textContent = darkMode

        ? "☀️ Light Mode"

        : "🌙 Dark Mode";

});


// SAVE CHANGES

saveButton.addEventListener("click", async function () {

    const newUsername =
        usernameInput.value.trim();

    const newPhone =
        phoneInput.value.trim();


    if (newUsername === "") {

        message.style.color = "red";

        message.textContent =
            "⚠️ Please enter a username";

        return;

    }


    if (newPhone === "") {

        message.style.color = "red";

        message.textContent =
            "⚠️ Please enter a phone number";

        return;

    }


    try {

        const response = await fetch(

            "http://localhost:5000/api/user/update",

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    email: email,

                    username: newUsername,

                    phone: newPhone

                })

            }

        );


        const data =
            await response.json();


        if (!response.ok) {

            message.style.color = "red";

            message.textContent =
                "❌ " + data.message;

            return;

        }


        localStorage.setItem(

            "username",

            data.username

        );


        message.style.color = "green";

        message.textContent =
            "✅ Profile updated successfully";


    } catch (error) {

        message.style.color = "red";

        message.textContent =
            "❌ Cannot connect to server";

        console.log(error);

    }

});


// BACK TO DASHBOARD

backButton.addEventListener("click", function () {

    window.location.href =
        "index4.html";

});