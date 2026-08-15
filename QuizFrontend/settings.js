// ==============================
// GET ELEMENTS
// ==============================

const usernameInput =
    document.getElementById("username-input");

const phoneInput =
    document.getElementById("phone-input");

const backButton =
    document.getElementById("back-btn");

const saveButton =
    document.getElementById("save-btn");

const deleteButton =
    document.getElementById("delete-btn");

const message =
    document.getElementById("message");

const themeButton =
    document.getElementById("theme-btn");

const email =
    localStorage.getItem("email");


// ==============================
// CHECK LOGIN
// ==============================

if (!email) {

    alert("Please login first.");

    window.location.href = "index2.html";

}


// ==============================
// DARK MODE
// ==============================

function loadTheme() {

    const darkMode =
        localStorage.getItem("darkMode") === "true";


    if (darkMode) {

        document.body.classList.add("dark-mode");

        themeButton.textContent =
            "☀️ Light Mode";

    }

    else {

        document.body.classList.remove("dark-mode");

        themeButton.textContent =
            "🌙 Dark Mode";

    }

}


// Load saved theme immediately

loadTheme();


// ==============================
// THEME BUTTON
// ==============================

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        const darkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        // Save theme globally

        localStorage.setItem(
            "darkMode",
            darkMode
        );


        if (darkMode) {

            themeButton.textContent =
                "☀️ Light Mode";

        }

        else {

            themeButton.textContent =
                "🌙 Dark Mode";

        }

    }
);


// ==============================
// LOAD USER PROFILE
// ==============================

async function loadUserProfile() {

    try {

        const response = await fetch(
            `https://quizverse-backend-si7g.onrender.com/api/user/${encodeURIComponent(email)}`
        );


        const data =
            await response.json();


        if (!response.ok) {

            message.style.color =
                "red";

            message.textContent =
                "❌ " + data.message;

            return;

        }


        usernameInput.value =
            data.username || "";


        phoneInput.value =
            data.phone || "";


        // Keep username updated locally

        localStorage.setItem(
            "username",
            data.username
        );

    }

    catch (error) {

        console.error(
            "PROFILE LOAD ERROR:",
            error
        );


        message.style.color =
            "red";


        message.textContent =
            "❌ Cannot connect to server";

    }

}


// Load profile

loadUserProfile();


// ==============================
// SAVE CHANGES
// ==============================

saveButton.addEventListener(
    "click",
    async function () {

        const newUsername =
            usernameInput.value.trim();


        const newPhone =
            phoneInput.value.trim();


        // Validate username

        if (newUsername === "") {

            message.style.color =
                "red";


            message.textContent =
                "⚠️ Please enter a username";


            return;

        }


        // Validate phone

        if (newPhone === "") {

            message.style.color =
                "red";


            message.textContent =
                "⚠️ Please enter a phone number";


            return;

        }


        try {

            saveButton.disabled =
                true;


            saveButton.textContent =
                "Saving...";


            const response = await fetch(

                "https://quizverse-backend-si7g.onrender.com/api/user/update",

                {

                    method: "PUT",

                    headers: {

                        "Content-Type":
                            "application/json"

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

                message.style.color =
                    "red";


                message.textContent =
                    "❌ " + data.message;


                return;

            }


            // Update local username

            localStorage.setItem(
                "username",
                data.username
            );


            message.style.color =
                "green";


            message.textContent =
                "✅ Profile updated successfully";

        }

        catch (error) {

            console.error(
                "UPDATE ERROR:",
                error
            );


            message.style.color =
                "red";


            message.textContent =
                "❌ Cannot connect to server";

        }

        finally {

            saveButton.disabled =
                false;


            saveButton.textContent =
                "Save Changes";

        }

    }
);


// ==============================
// DELETE ACCOUNT
// ==============================

deleteButton.addEventListener(
    "click",
    async function () {

        const confirmDelete =
            confirm(
                "Are you sure you want to permanently delete your account?"
            );


        if (!confirmDelete) {

            return;

        }


        try {

            deleteButton.disabled =
                true;


            deleteButton.textContent =
                "Deleting...";


            const response = await fetch(

                "https://quizverse-backend-si7g.onrender.com/api/user/delete",

                {

                    method: "DELETE",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        email: email

                    })

                }

            );


            const data =
                await response.json();


            if (!response.ok) {

                message.style.color =
                    "red";


                message.textContent =
                    "❌ " + data.message;


                return;

            }


            // Remove saved user information

            localStorage.clear();


            alert(
                "✅ Account deleted successfully"
            );


            window.location.href =
                "index2.html";

        }

        catch (error) {

            console.error(
                "DELETE ERROR:",
                error
            );


            message.style.color =
                "red";


            message.textContent =
                "❌ Cannot connect to server";

        }

        finally {

            deleteButton.disabled =
                false;


            deleteButton.textContent =
                "🗑️ Delete My Account";

        }

    }
);


// ==============================
// BACK BUTTON
// ==============================

backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "index4.html";

    }
);