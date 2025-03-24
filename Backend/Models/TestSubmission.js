//models for TestSubmission

const mongoose = require("mongoose");

const TestSubmissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, },
  score: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model("TestSubmission", TestSubmissionSchema);
