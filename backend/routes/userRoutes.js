const express = require("express");
const router = express.Router();

const {
    getUserProfile,
    updateUserProfile,
    deleteUser
} = require("../controllers/userController");

// Get User Profile
router.get("/:email", getUserProfile);

// Update Profile
router.put("/update", updateUserProfile);

// Delete Account
router.delete("/delete", deleteUser);

module.exports = router;