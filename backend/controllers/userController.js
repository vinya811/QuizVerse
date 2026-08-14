const User = require("../models/User");

// ======================
// Get User Profile
// ======================
const getUserProfile = async (req, res) => {
    try {
        const { email } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            username: user.username,
            email: user.email,
            phone: user.phone,
            dob: user.dob
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

// ======================
// Update User Profile
// ======================
const updateUserProfile = async (req, res) => {
    try {
        const { email, username, phone } = req.body;

        console.log("UPDATE BODY:", req.body);

        const user = await User.findOne({ email });

        console.log("FOUND USER:", user);

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
        console.log("UPDATE ERROR:");
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

// ======================
// Delete User Account
// ======================
const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        await User.deleteOne({ email });

        res.status(200).json({
            message: "Account deleted successfully"
        });

    } catch (error) {
        console.log("DELETE ERROR:");
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

// ======================
// Get Leaderboard
// ======================
const getLeaderboard = async (req, res) => {
    try {

        const users = await User.find(
            {},
            {
                username: 1,
                leaderboardPoints: 1,
                _id: 0
            }
        )
        .sort({ leaderboardPoints: -1 })
        .limit(10);

        res.status(200).json(users);

    } catch (error) {

        console.log("LEADERBOARD ERROR:");
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

// ======================
// Update Leaderboard Score
// ======================
const updateLeaderboard = async (req, res) => {
    try {

        const { email, correct, level } = req.body;

        if (!email || correct === undefined || !level) {
            return res.status(400).json({
                message: "Email, correct answers and level are required"
            });
        }

        let pointsPerQuestion;

        if (level === "easy") {
            pointsPerQuestion = 5;
        }
        else if (level === "medium") {
            pointsPerQuestion = 10;
        }
        else if (level === "hard") {
            pointsPerQuestion = 15;
        }
        else {
            return res.status(400).json({
                message: "Invalid quiz level"
            });
        }

        const pointsEarned = correct * pointsPerQuestion;

        const user = await User.findOneAndUpdate(
            { email },
            {
                $inc: {
                    leaderboardPoints: pointsEarned
                }
            },
            {
                new: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Leaderboard updated successfully",
            pointsEarned: pointsEarned,
            totalPoints: user.leaderboardPoints
        });

    } catch (error) {

        console.log("LEADERBOARD UPDATE ERROR:");
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

// ======================
// Export Controllers
// ======================
module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getLeaderboard,
    updateLeaderboard
};