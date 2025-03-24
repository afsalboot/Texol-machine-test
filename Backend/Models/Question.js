//models for Question

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question:{type: String},
    options:[String],
    correctAnswer:{type: String}
}, { timestamps: true });

module.exports = mongoose.model('Question',QuestionSchema);