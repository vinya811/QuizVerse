const User = require("../models/User");

// Register User
const registerUser = async (req, res) => {
    console.log("REGISTER BODY:", req.body);

    try {
        const { email, username, password, phone, dob } = req.body;

        if (!email || !username || !password || !phone || !dob) {
            return res.status(400).json({
                message: "Please fill all the fields"
            });
        }

        const existingUser = await User.findOne({ email });

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
};

// Login User
const loginUser = async (req, res) => {
    console.log("LOGIN BODY:", req.body);

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

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
            username: user.username,
            email: user.email
        });

    } catch (error) {
    console.log("REGISTER ERROR:");
    console.log(error);
    console.log(error.stack);

    res.status(500).json({
        message: error.message
    });
}

};

// Export both functions
module.exports = {
    registerUser,
    loginUser
};