const express = require("express");
const router = express.Router();

const {
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getLeaderboard,
    updateLeaderboard
} = require("../controllers/userController");

// Get Leaderboard
router.get("/leaderboard", getLeaderboard);

// Update Leaderboard Score
router.post("/leaderboard/update", updateLeaderboard);

// Get User Profile
router.get("/:email", getUserProfile);

// Update Profile
router.put("/update", updateUserProfile);

// Delete Account
router.delete("/delete", deleteUser);

module.exports = router;