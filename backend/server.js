console.log("SERVER FILE LOADED");

const dns = require("dns");

dns.setServers(["8.8.8.8"]);


const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();


const User = require("./models/User");


const app = express();

const PORT = 5000;


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)

    .then(() => {

        console.log("MongoDB Connected Successfully ✅");

    })

    .catch((error) => {

        console.log("MongoDB Connection Error ❌");

        console.log(error);

    });


// TEST ROUTE

app.get("/", (req, res) => {

    res.send("QuizVerse Backend is Running 🚀");

});


// REGISTER USER

app.post("/api/register", async (req, res) => {

    try {

        const {

            email,

            username,

            password,

            phone,

            dob

        } = req.body;


        if (

            !email ||

            !username ||

            !password ||

            !phone ||

            !dob

        ) {

            return res.status(400).json({

                message: "Please fill all the fields"

            });

        }


        const existingUser = await User.findOne({

            email: email

        });


        if (existingUser) {

            return res.status(400).json({

                message: "Email already registered"

            });

        }


        const newUser = new User({

            email,

            username,

            password,

            phone,

            dob

        });


        await newUser.save();


        res.status(201).json({

            message: "Registration successful"

        });


    } catch (error) {

        console.log(error);


        res.status(500).json({

            message: "Server error"

        });

    }

});


// LOGIN USER

app.post("/api/login", async (req, res) => {

    try {

        const {

            email,

            password

        } = req.body;


        const user = await User.findOne({

            email: email

        });


        if (!user) {

            return res.status(404).json({

                message: "No account found"

            });

        }


        if (user.password !== password) {

            return res.status(401).json({

                message: "Incorrect password"

            });

        }


        res.status(200).json({

            message: "Login successful",

            username: user.username

        });


    } catch (error) {

        console.log(error);


        res.status(500).json({

            message: "Server error"

        });

    }

});

// GET USER PROFILE

app.get("/api/user/:email", async (req, res) => {

    try {

        const user = await User.findOne({

            email: req.params.email

        });


        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }


        res.status(200).json({

            username: user.username,

            phone: user.phone

        });


    } catch (error) {

        console.log(error);


        res.status(500).json({

            message: "Server error"

        });

    }

});

// UPDATE USER PROFILE

app.put("/api/user/update", async (req, res) => {

    console.log("UPDATE ROUTE HIT ✅");


    try {

        const {

            email,

            username,

            phone

        } = req.body;


        const user = await User.findOne({

            email: email

        });


        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }


        user.username = username;

        user.phone = phone;


        await user.save();


        res.status(200).json({

            message: "Profile updated successfully",

            username: user.username,

            phone: user.phone

        });


    } catch (error) {

        console.log(error);


        res.status(500).json({

            message: "Server error"

        });

    }

});

console.log("REGISTERING DELETE ROUTE");

// DELETE USER ACCOUNT

app.delete("/api/user/delete", async (req, res) => {

    try {

        console.log("DELETE BODY:", req.body);

        const { email } = req.body;

        const user = await User.findOne({ email });

        console.log("FOUND USER:", user);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        await User.deleteOne({ email });

        res.json({
            message: "Account deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});

//app.get("/hello", (req, res) => {
    //res.send("Hello");
//});

// START SERVER

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});