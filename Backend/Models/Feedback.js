const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    feedback: { type: String, trim: true },
    rating: { 
      type: Number, 
      enum: [1, 2, 3, 4, 5], // Restrict values to 1-5
      required: true 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
