//question router

const router = require("express").Router();
const question = require("../Models/Question");

router.post("/addQuestion", async (req, res) => {
    try {
        const add = await question.create(req.body);
        return res.status(200).json({ message: "question added", add });
    } catch (err) {
        console.log("question add error",err.message)
        return res.status(500).json({ message: err.message });
    }
});

router.get("/displayQuestion", async (req, res) => {
    try {
        const questions = await question.find(req.body);
        return res.status(200).json({ message: "Question displayed", questions });
    } catch (err) {
        console.log("question display error",err.message)
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
