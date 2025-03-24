const router = require('express').Router();
const Feedback = require('../Models/Feedback');



router.post('/submitFeedback', async (req, res) => {
    try {
        const { userId, rating, feedback } = req.body;

        if (!userId || !rating) {
            return res.status(400).json({ message: "User ID and rating are required!" });
        }

        // Check if user already submitted feedback and update if exists
        const reaction = await Feedback.findOneAndUpdate(
            { userId },
            { $set: { rating, feedback } }, // Updated both rating and feedback in one step
            { new: true, upsert: true } // "upsert: true" creates new feedback if not found
        );

        return res.status(200).json({
            message: reaction ? "Feedback updated successfully!" : "Feedback submitted successfully!",
            reaction,
        });

    } catch (err) {
        console.error("Feedback submission error:", err.message);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});




module.exports = router;
